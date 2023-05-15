document.querySelectorAll('.pricing_plans_content_blocks_item').forEach(element => {
    element.addEventListener('mouseover', (e) => {
        element.classList.add('white');
        element.querySelector('.pricing_plans_content_blocks_item_H').classList.add('white_H');
        element.querySelector('.pricing_plans_content_blocks_item_H2').classList.add('white_H2');
        element.querySelector('.prise').classList.add('white_prise');
        element.querySelector('.pricing_plans_content_blocks_item_btn').classList.add('white_btn');
    })

});

document.querySelectorAll('.pricing_plans_content_blocks_item').forEach(element => {
    element.addEventListener('mouseout', (e) => {
        element.classList.remove('white');
        element.querySelector('.pricing_plans_content_blocks_item_H').classList.remove('white_H');
        element.querySelector('.pricing_plans_content_blocks_item_H2').classList.remove('white_H2');
        element.querySelector('.prise').classList.remove('white_prise');
        element.querySelector('.pricing_plans_content_blocks_item_btn').classList.remove('white_btn');
    })

});



document.querySelector('.password_copy').addEventListener('input', (e) => {

    if (document.querySelector('.password_copy').value === document.querySelector('.password_start').value) {
        document.querySelector('.password_copy').style.border = 'solid 1px green'
        document.querySelector('.password_start').style.border = 'solid 1px green'
    }
    else {
        document.querySelector('.password_copy').style.border = 'solid 1px red'
        document.querySelector('.password_start').style.border = 'solid 1px red'
    }

})

const reitingListEl = document.querySelectorAll('.reit');

reitingListEl.forEach(element => {
    element.addEventListener('click', (e) => {
        
        reitingListEl.forEach(element => {
            element.classList.remove('star');
            // console.log(999);
        })
        
        const tar = e.target;
        tar.classList.toggle('star')
        // console.log(111);

        for (let i = 0; i < reitingListEl.length; i++)
            if (reitingListEl[i].classList.contains('star')) {
                break;
                // console.log(222);
            }
            else {
                reitingListEl[i].classList.add('star');
                // console.log(333);
            }

    })




});