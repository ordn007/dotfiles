#
# ~/.bashrc
#

source ~/.bash_git
# If not running interactively, don't do anything
[[ $- != *i* ]] && return


# Colors variables

BRed="\[\033[1;31m\]"           # Bold Red
Red="\[\033[0;31m\]"            # Red
Green="\[\033[0;32m\]"          # Bold Green
BGreen="\[\033[1;32m\]"         # Green 
BYellow="\[\033[1;33m\]"        # Bold Yellow
Yellow="\[\e[0;33m\]"           # Yellow
BBlue="\[\033[1;34m\]"          # Bold Blue
Blue="\[\033[0;34m\]"           # Blue
Reset="\[\e[m\]"                # Reset

#Git branch
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1]/'
}

# Bash prompt script
prompt_command() {
  local status="$?"
  local status_color=""
  local face=""
  if [ $status != 0 ]; then
      face=":("
      status_color=$BRed
  else
      face=":)"
      status_color=$BGreen
  fi
  #export PS1="$RED\$(date +%H:%M) \w$YELLOW \$(parse_git_branch)$GREEN\$ "
  PS1="${Red}[Arch-Linux]${BYellow}[\u@\h$]${Blue}$(parse_git_branch) ${status_color}$face${Reset} "
}
export PROMPT_COMMAND=prompt_command


# Aliases
alias ls='ls --color=auto'
alias Ls=ls
alias LS=ls

# Auto start neofetch whenever the terminal opens
neofetch



