
const calcCurrentPosition = () => {
    const Z_OffsetWebEditor = 40.0;
    const Z_OffsetLocalEditor = 35.0;
    const webEditorPosition = document.querySelector('.web_editor').getBoundingClientRect().y;
    const localEditorPosition = document.querySelector('.local_editor_cli').getBoundingClientRect().y;



    if (webEditorPosition >= Z_OffsetWebEditor) {
        ChangeToZennWritingMethod();
        ChangeToZennWritingMethodToggle();
    }

    if ((webEditorPosition <= 0)
    &&  (localEditorPosition >= Z_OffsetLocalEditor)) {
        ChangeToWebEditor();
        ChangeToWebEditorToggle();
    }

    if (localEditorPosition <= 0) {
        ChangeToLocalEditor();
        ChangeToLocalEditorToggle();
    }

};

const ChangeToZennWritingMethod = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method');


    mokujiWritingSelector.classList.add('mokuji_active');
    mokujiWebEditorSelector.classList.remove('mokuji_active');
    mokujiLocalEditorSelector.classList.remove('mokuji_active');

    mokujiZennWritingMethod.classList.add('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.remove('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.remove('mokuji_current_local_editor_method');
};

const ChangeToWebEditor = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method');

    mokujiWritingSelector.classList.remove('mokuji_active');
    mokujiWebEditorSelector.classList.add('mokuji_active');
    mokujiLocalEditorSelector.classList.remove('mokuji_active');

    mokujiZennWritingMethod.classList.remove('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.add('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.remove('mokuji_current_local_editor_method');
};

const ChangeToLocalEditor = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method');

    mokujiWritingSelector.classList.remove('mokuji_active');
    mokujiWebEditorSelector.classList.remove('mokuji_active');
    mokujiLocalEditorSelector.classList.add('mokuji_active');

    mokujiZennWritingMethod.classList.remove('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.remove('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.add('mokuji_current_local_editor_method');

};

const ChangeToZennWritingMethodToggle = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link_toggle');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link_toggle');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link_toggle');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method_toggle');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method_toggle');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method_toggle');


    mokujiWritingSelector.classList.add('mokuji_active');
    mokujiWebEditorSelector.classList.remove('mokuji_active');
    mokujiLocalEditorSelector.classList.remove('mokuji_active');

    mokujiZennWritingMethod.classList.add('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.remove('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.remove('mokuji_current_local_editor_method');
};

const ChangeToWebEditorToggle = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link_toggle');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link_toggle');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link_toggle');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method_toggle');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method_toggle');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method_toggle');

    mokujiWritingSelector.classList.remove('mokuji_active');
    mokujiWebEditorSelector.classList.add('mokuji_active');
    mokujiLocalEditorSelector.classList.remove('mokuji_active');

    mokujiZennWritingMethod.classList.remove('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.add('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.remove('mokuji_current_local_editor_method');
};

const ChangeToLocalEditorToggle = () => {
    var mokujiWritingSelector = document.querySelector('.mokuji_zenn_writing_link_toggle');
    var mokujiWebEditorSelector = document.querySelector('.mokuji_zenn_web_editor_link_toggle');
    var mokujiLocalEditorSelector = document.querySelector('.mokuji_zenn_local_editor_link_toggle');

    var mokujiZennWritingMethod = document.querySelector('.mokuji_zenn_writing_method_toggle');
    var mokujiWebEditorMethod = document.querySelector('.mokuji_web_editor_method_toggle');
    var mokujiLocalEditorMethod = document.querySelector('.mokuji_local_editor_method_toggle');

    mokujiWritingSelector.classList.remove('mokuji_active');
    mokujiWebEditorSelector.classList.remove('mokuji_active');
    mokujiLocalEditorSelector.classList.add('mokuji_active');

    mokujiZennWritingMethod.classList.remove('mokuji_current_zenn_writing_method');
    mokujiWebEditorMethod.classList.remove('mokuji_current_web_editor_method');
    mokujiLocalEditorMethod.classList.add('mokuji_current_local_editor_method');

};
window.addEventListener('scroll',calcCurrentPosition);

var isMokujiDisp = true;
const clickMokuji = () => {

    const image = document.getElementById('mokuji_down_image');
    const modal = document.getElementById('mokuji_aside_list_id');

    isMokujiDisp = !(isMokujiDisp);

    image.style.transform = 'rotate(180deg)'; 
    modal.style.display = 'block';
};

const outsideClose = (e) => {
    const image = document.getElementById('mokuji_down_image');
    const modal = document.getElementById('mokuji_aside_list_id');


    if ((e.target != modal) && (isMokujiDisp == true)){
        image.style.transform = 'rotate(0deg)';
        modal.style.display = 'none';
    }
}

window.addEventListener('click',outsideClose);
