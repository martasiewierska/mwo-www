const navTrigger = document.querySelector('#nav-trigger');

navTrigger?.addEventListener('click', () => {
    document.querySelector("#aside")?.classList.toggle('open');
    document.querySelector("#aside .overlay")?.addEventListener('click', () => {
        document.querySelector("#aside")?.classList.remove('open');
    });
});

document.querySelector('#submit')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('#name')?.value === '' || document.querySelector('#email')?.value === '' || document.querySelector('#message')?.value === '') {
        document.querySelector('#modal-contact')?.classList.add('open', 'error');
    } else {
        document.querySelector('#modal-contact')?.classList.add('open', 'success');
    }

    document.querySelector('#modal-contact .overlay')?.addEventListener('click', () => {
        document.querySelector('#modal-contact')?.classList.remove('open');
        document.querySelector('#modal-contact')?.classList.remove('success');
        document.querySelector('#modal-contact')?.classList.remove('error');

    });
});
