/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        m_colors:'#d8bdaa',
        b_color:'#724444',
        t_color:'#a4684e'
      },
      backgroundImage: {
         'custom-gradient-bottom-right': 'linear-gradient(to right bottom, #a4684e, #ae785d, #b8886e, #c1987f, #cba891, #cba891, #cba891, #cba891, #c1987f, #b8886e, #ae785d, #a4684e)',
        'custom-radial-gradient': 'radial-gradient(circle, #d8bdaa, #cead97, #c59d85, #bb8d74, #b17d63, #b17d63, #b17d63, #b17d63, #bb8d74, #c59d85, #cead97, #d8bdaa)',
      },
    },
  },
  plugins: [],
}
