/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       animation:{
        blueShimmer: 'blueShimmer 2s infinite', 
        shine: 'shine 1.5s infinite',
       },
       keyframes:{
        blueShimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
       },
       colors:{
        border_color:" hsl(0,0%,10%)",
        arrow_balck:"hsl(0,5%,15%)",
        chat_color:"hsl(0,15%,10%)",
        code_color:"#011627",
        code_border:"hsl(206,55%,15%)",
        user_color:"hsl(160,70%,20%)",
        ai_color:"hsl(220,55%,20%)",
        design_color:"#DDCCFF",
        forward_color:"#FB4B87",
       },
       boxShadow:{
        "normal":"0px 1px  0px 0px hsl(0,0%,15%)"
       },
       fontFamily:{
        
        'DM-Sans':["DM Sans", 'sans-serif'],
        'firo-code':["Fira Code", 'monospace'],
        'lato':["Lato", 'sans-serif'],
        'inter':["Inter", 'sans-serif']
       },
      
  
    },
  },
  plugins: [],
}
