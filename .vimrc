"+++++++++++++++++
"+++++ VIMRC +++++
"+++++++++++++++++

" Sets my leader to ,
let mapleader=","


" Installs plugins
set rtp+=~/.vim/bundle/Vundle.vim "Path to plugins
call vundle#begin()
source ~/.vim/vimSettings/plugins.vim
call vundle#end()
filetype plugin indent on    


" Initializes vim settings through external files
source ~/.vim/vimSettings/pluginSettings.vim
source ~/.vim/vimSettings/initSettings.vim
"source ~/.vim/vimSettings/remapSettings.vim
"source ~/.vim/vimSettings/leaderSettings.vim



" Handles my highlighing of variables when hovering over it
hi CurrentWordTwins guifg=#FFFFFF guibg=#E94F2E gui=underline,bold ctermfg=7* ctermbg=4 cterm=underline,bold

 " auto-reload vimrc on save
augroup myvimrc
    au!
    au BufWritePost .vimrc,_vimrc,vimrc,.gvimrc,_gvimrc,gvimrc,*.vim nested so $MYVIMRC | if has('gui_running') | so $MYGVIMRC | endif
augroup END
 
 
let g:ycm_global_ycm_extra_conf = '/usr/share/vim/vimfiles/third_party/ycmd/cpp/ycm/.ycm_extra_conf.py' 
 



