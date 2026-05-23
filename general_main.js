function general_main(unit,size)
{
    const screen=document.querySelector('#screen');

    const main=document.createElement('div');
    main.style.border=`gray solid ${unit*size/100}px`;
    main.style.width=`${size*unit}px`;
    main.style.height=`${size*unit}px`;
    main.style.borderRadius="50%"
    main.style.position="relative";
    main.style.top="50vh";
    main.style.left="50vw";
    main.style.display="flex";
    main.id="main";
    main.style.transform="translate(-50%,-50%)";

    screen.appendChild(main);
}