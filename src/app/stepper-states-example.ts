import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {MatStepper} from "@angular/material";
import {logger} from "codelyzer/util/logger";

@Component({
    selector: "stepper-states-example",
    styleUrls: ["./stepper-states-example.scss"],
    templateUrl: "./stepper-states-example.html"
})

export class StepperStatesExample {

    @ViewChild("scrollContainer")
    public scrollContainer: ElementRef<HTMLDivElement>;

    @ViewChildren('sections')
    sections: QueryList<ElementRef>;

    selectedIndex: number = 0;

    steps = [
        {
            label: "Step 0"
        },
        {
            label: "Step 1"
        },
        {
            label: "Step 2"
        },
        {
            label: "Step 3"
        },
        {
            label: "Step 4"
        },
        {
            label: "Step 5"
        },
        {
            label: "Step 6"
        },
        {
            label: "Step 7"
        },
        {
            label: "Step 8"
        },
        {
            label: "Step 9"
        }
    ]

    dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi 
    tristique. Sagittis vitae et leo duis ut. Rhoncus est pellentesque elit ullamcorper. 
    Non consectetur a erat nam at lectus urna. Purus in mollis nunc sed id. Leo a diam 
    sollicitudin tempor id eu nisl nunc mi. Cursus in hac habitasse platea dictumst. 
    At varius vel pharetra vel turpis nunc eget. Dolor sit amet consectetur adipiscing elit. 
    Phasellus vestibulum lorem sed risus ultricies tristique. Sed augue lacus viverra vitae 
    congue eu consequat ac. Ultricies tristique nulla aliquet enim tortor at. Felis bibendum 
    ut tristique et egestas quis. Tellus in metus vulputate eu scelerisque felis imperdiet 
    proin. Ac auctor augue mauris augue neque gravida.`;

    public onStepperChange(step: MatStepper): void {
        const selectedIndex = step.selectedIndex;
        this.toScroll(`section${selectedIndex}`);
    }

    public onSectionChange(id: string): void {
        if(id && id.length)
            this.selectedIndex = +id[id.length-1];
        else
            this.selectedIndex = 0;
    }

    private toScroll(id: string): void {
        const toScrollSection: ElementRef = <ElementRef>this.sections.find((section: ElementRef) => {
            return section.nativeElement.id === id;
        });
        toScrollSection && toScrollSection.nativeElement.scrollIntoView(true);
    }
}
