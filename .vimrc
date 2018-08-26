"Set Leader to,
let mapleader=","

let g:ycm_global_ycm_extra_conf = '/usr/share/vim/vimfiles/third_party/ycmd/cpp/ycm/.ycm_extra_conf.py'
"let g:ycm_server_python_interpreter = '/usr/bin/python'

"Enable syntax highlighting"
"syntax enable"

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
	call vundle#begin()
		source ~/.vim/vimSettings/plugins.vim
	call vundle#end()            

	source ~/.vim/vimSettings/pluginSettings.vim
	source ~/.vim/vimSettings/initSettings.vim

" set the runtime path to imclude ctrlp
set runtimepath^=~/.vim/bundle/ctrlp.vim

execute pathogen#infect()
syntax on
filetype plugin indent on  
" To ignore plugin indent changes, instead use:
"filetype plugin on

" auto-reload vimrc on save
augroup myvimrc
    au!
    au BufWritePost .vimrc,_vimrc,vimrc,.gvimrc,_gvimrc,gvimrc,*.vim nested so $MYVIMRC | if has('gui_running') | so $MYGVIMRC | endif
augroup END

"Latex auto preview setting"

map I :! pdflatex %<CR><CR>
map S :! mupdf-x11 $(echo % \| sed 's/tex$/pdf/') & disown<CR><CR>
