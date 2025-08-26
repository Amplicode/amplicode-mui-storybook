import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Button,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  StepperOwnProps,
  Typography,
} from "@mui/material";
import React from "react";

const meta = {
  title: "Navigation/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["onDelete"],
    },
  },
  decorators: [(Story) => <Box width={500}>{Story()}</Box>],
  argTypes: {
    alternativeLabel: {
      control: "select",
      options: [true, false],
    },
    nonLinear: {
      control: "select",
      options: [true, false],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinearStepper: Story = {
  render: (props: StepperOwnProps) => {
    const steps = ["Step 1", "Step 2", "Step 3"];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
      return step === 1;
    };

    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <>
        <Stepper activeStep={activeStep} {...props}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} sx={{ p: 0 }}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant="contained"
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleSkip}
                  sx={{ mr: 1 }}
                >
                  Skip
                </Button>
              )}
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </>
    );
  },
};

export const NonLinearStepper: Story = {
  render: (props: StepperOwnProps) => {
    const steps = ["Step 1", "Step 2", "Step 3"];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
      [k: number]: boolean;
    }>({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };

    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };

    const handleComplete = () => {
      setCompleted({
        ...completed,
        [activeStep]: true,
      });
      handleNext();
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };

    return (
      <>
        <Stepper activeStep={activeStep} {...props} nonLinear>
          {steps.map((label, index) => {
            return (
              <Step key={label} sx={{ p: 0 }} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </>
    );
  },
};
