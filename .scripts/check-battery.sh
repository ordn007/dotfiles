#!/bin/bash

# Useful Variables    ( Only used last one)
BATTERIES=/sys/class/power_supply/BAT*/uevent       # All available Power Supplies
CAPACITY=/sys/class/power_supply/BAT0/capacity      # Current battery percentage
BATTINFO=`acpi -b`                                  # Display all battery info
UPPER_LIMIT=25
MED_LIMIT=15
LOWER_LIMIT=10

# Needed for cron jobs to display notify-send.
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus &&

# Check battery state (Charing | Discharging)
is_battery_discharging() {
    cat $BATTERIES | grep Charging && return 1
    return 0
} >/dev/null

# Returns battery percent level.
current_capacity(){
  cat $CAPACITY
}


if is_battery_discharging; then
    # if [[ `echo $BATTINFO | cut -f 5 -d " "` < 00:30:00 ]] ; then
    if [ "$(current_capacity)" -lt "$LOWER_LIMIT" ]; then
        msg="<span foreground='#FFE000' font='Monosapce 25'>Battery Critical -- Level: $(current_capacity)%</span>"
        notify-send -u critical "$msg" "$BATTINFO"

    elif [ "$(current_capacity)" -lt "$MED_LIMIT" ]; then
        msg="<span foreground='#FFE000' font='Monosapce 25'>Battery Low -- Level: $(current_capacity)%</span>"
        notify-send -u normal "$msg" "$BATTINFO"

    elif [ "$(current_capacity)" -lt "$UPPER_LIMIT" ]; then
        msg="<span foreground='#FFE000' font='Monosapce 25'>Battery Low -- Level: $(current_capacity)%</span>"
        notify-send -u low "$msg" "$BATTINFO"
    fi
else
    echo "Battery Charging"
fi
