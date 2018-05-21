"+++Current Word Config+++
let g:vim_current_word#highlight_current_word = 0

"++You Complete Me Config+++
let g:ycm_global_ycm_extra_conf = '/usr/share/vim/vimfiles/third_party/ycmd/cpp/ycm/.ycm_extra_conf.py'
"let g:ycm_global_ycm_extra_conf = '~/.vim/bundle/YouCompleteMe/.ycm_extra_conf.py'
let g:ycm_show_diagnostics_ui = 0

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

"+++Syntastic Config+++
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_loc_list_height=5

"+++CTRLP Config+++
let g:ctrlp_show_hidden = 1
let g:ctrlp_custom_ignore ='\v[/](node_modules|target|dist|build|bin)|(.(swp|ico|git|svn))$'
let g:ctrlp_working_path_mode = 'ra'

"+++Airline Config+++
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#show_close_button = 0
let g:airline#extensions#tabline#show_buffers = 0
let g:airline#extensions#tabline#show_splits = 0
let g:airline#extensions#tabline#show_tabs = 1

"+++Java Script Plugins Config+++
let g:jsx_ext_required = 0
let g:javascript_plugin_jsdoc = 1







