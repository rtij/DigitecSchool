import { trigger,query, group, transition,animate,style } from "@angular/animations";

export let routerAnimation = 
trigger('routerAnimation',[
    transition('1=>2',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('2=>3',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('1=>3',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('1=>5',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('2=>5',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('2=>6',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('1=>6',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('4=>6',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
     transition('3=>5',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),transition('2=>4',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]), 
    transition('4=>5',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('1=>4',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(-100%)',opacity:0}))),
            query(':enter',animate('1s cubic-bezier(.35,0,.25,1)',style({opacity:1,transform:'translateX(0%)'}))),
        ])
    ]),
    transition('2=>1',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
    transition('3=>1',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
     transition('3=>2',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
    transition('4=>1',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
    transition('4=>2',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
    transition('6=>1, 6=>2',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
    transition('6=>4',[
        style({height:'!'}),
        query(':enter',style({opacity:1,transform:'translateX(-100%)'})),
        query(':enter,:leave', style({position:'absolute',top:'0',right:'0',left:'0'})),
        group([
            query(':leave',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(100%)',opacity:0}))]),
            query(':enter',[animate('1s cubic-bezier(.35,0,.25,1)',style({transform:'translateX(0%)',opacity:1}))]),
        ])
    ]),
])