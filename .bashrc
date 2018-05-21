#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return


# Colors variables
light_green="\[\e[1;32m\]"
light_red="\[\e[1;31m\]"
yellow="\[\e[0;33m\]"
gray="\[\e[0;37m\]"
reset="\[\e[m\]"


# Bash prompt script
prompt_command() {
  local status="$?"
  local status_color=""
  local face=""
  if [ $status != 0 ]; then
      face=":("
      status_color=$light_red
  else
      face=":)"
      status_color=$light_green
  fi
  export PS1="[${yellow}\u@\h${reset}] ${status_color}$face${reset} "
}
export PROMPT_COMMAND=prompt_command


# Aliases
alias ls='ls --color=auto'


# Auto start neofetch whenever the terminal opens
neofetch



