# Architecture rules
- Use the root next-themes provider with class-based themes and persisted preference; all pages must follow global semantic HSL tokens so theme switching stays consistent.
- Keep the shared fixed header outside transformed animation contexts; page transitions use opacity only so the header remains anchored while scrolling.
- Use the shared Button component for interactive controls and honor reduced-motion preferences through MotionConfig and shared reveal animations.