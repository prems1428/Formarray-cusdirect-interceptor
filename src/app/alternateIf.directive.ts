import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector : '[alternateIf]'
})

export class AlternateDirective implements OnChanges{

    @Input() alternateIf : boolean;

    constructor(private templateRef : TemplateRef<any> ,
                private vcRef : ViewContainerRef){}

    ngOnChanges(): void {
        if(this.alternateIf){
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else{
            this.vcRef.clear();
        }
        
    }
}