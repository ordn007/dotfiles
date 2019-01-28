set backspace=indent,eol,start

"autocmd BufWritePre * StripWhitespace
set term=xterm-256color
syntax on
"colorscheme gruvbox
"colorscheme sublimemonokai
"colorscheme atom-dark

"TODO: research tag generation and syntax highlighting 
"       https://github.com/xolox/vim-easytags

hi Normal ctermbg=NONE

set laststatus=2
set ttyfast
set copyindent
set preserveindent
set nolazyredraw    " Enable if running slow...
set autoindent

set wrap
set nofoldenable  	" I really don't like folds..
set linebreak
set breakindent  	" linebreaks preserve indentation
set textwidth=79
set showbreak=⇇

" use intelligent indentation for C
" configure tabwidth and insert spaces instead of tabs
set tabstop=4        " tab width is 4 spaces
set shiftwidth=4     " indent also with 4 spaces
set expandtab        " expand tabs to spaces

set number
set relativenumber
set showcmd
set cursorline
set showmatch
set incsearch
set hlsearch
"set ruler
set magic		" for regular expressions turn magic on
set visualbell      	" don't beep
set history=500    	" remember more commands and search history
set undolevels=500 	" use many levels of undo
set wildmenu
"set foldcolumn=1
set nocompatible	" be improved

" ------------------------------------------------
" -------------------SEARCHING--------------------
" ------------------------------------------------
set ignorecase   " ignore case when searching
set smartcase    " ignore case if search pattern is all lowercase, case-sensitive otherwise
set incsearch    " search as characters are entered
"set hlsearch     " highlight matches

set splitright     " Puts new vsplit windows to the right of the current
set splitbelow     " Puts new split windows to the bottom of the current

set scrolljump=5   " Line to scroll when cursor leaves screen
set scrolloff=3    " Minumum lines to keep above and below cursor


" ------------------------------------------------
" -------------------CSCI 400---------------------
" ------------------------------------------------
set  et


