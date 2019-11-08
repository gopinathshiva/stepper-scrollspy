import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {MatStepper} from "@angular/material";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@Component({
    selector: "stepper",
    templateUrl: "./stepper.component.html",
    styleUrls: ["./stepper.component.scss"],
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepperComponent{

    // ------------------------------------------------------------------------
    // API, Inputs, Outputs
    // ------------------------------------------------------------------------

    @Input("steps")
    public steps: any[];

    @Input()
    public selectedIndex: number = 0;

    @Output()
    public onStepperChange: EventEmitter<MatStepper> = new EventEmitter();

    // ------------------------------------------------------------------------
    // Constructor, Component Lifecycle
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // View Interaction
    // ------------------------------------------------------------------------

    public selectionChange(step: MatStepper): void {
        this.onStepperChange.emit(step);
    }

}
