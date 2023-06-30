import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector : '[highlight]'
})

export class customDirective {

    @HostBinding('style.color') color : string;

    constructor(private eleRef : ElementRef,private render : Renderer2){
        // this.eleRef.nativeElement.style.color = 'yellow';
        // (<HTMLElement>this.eleRef.nativeElement).style.color = 'red';
        // (this.eleRef.nativeElement as HTMLElement).style.color = 'blue';

    //    this.render.setStyle(this.eleRef.nativeElement,'color','brown')
    }

    @HostListener('mouseenter') mouseEnter(){
        // this.eleRef.nativeElement.style.color = 'red';
        this.color = 'red' ;
    }
    @HostListener('mouseleave') mouseLeave(){
        // this.eleRef.nativeElement.style.color = 'yellow';
        this.color = 'yellow' ;
    }


}