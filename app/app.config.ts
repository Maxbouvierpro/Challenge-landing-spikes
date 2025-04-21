export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        // color: 'neutral'
      }
    },

    switch: {
      variants: {
        color: {
          primary: {
            base: 'data-[state=checked]:bg-[#F2B53C] dark:data-[state=checked]:bg-[#F2B53C] focus-visible:outline-[#F2B53C]'
          }
        }
      }
    },
  }
})