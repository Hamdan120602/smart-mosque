export const themes = {

  emerald:{
    name:"Emerald Mosque",
    colors:{
      primary:"#065f46",
      secondary:"#10b981",
      accent:"#d4af37",
      background:"#f8fafc",
      card:"#ffffff"
    }
  },


  royal:{
    name:"Royal Night",
    colors:{
      primary:"#111827",
      secondary:"#1e3a8a",
      accent:"#fbbf24",
      background:"#020617",
      card:"#0f172a"
    }
  },


  luxury:{
    name:"Luxury Blue",
    colors:{
      primary:"#1e40af",
      secondary:"#3b82f6",
      accent:"#f59e0b",
      background:"#eff6ff",
      card:"#ffffff"
    }
  },


  nature:{
    name:"Nature Calm",
    colors:{
      primary:"#166534",
      secondary:"#22c55e",
      accent:"#84cc16",
      background:"#f0fdf4",
      card:"#ffffff"
    }
  },


  gold:{
    name:"Gold Premium",
    colors:{
      primary:"#18181b",
      secondary:"#27272a",
      accent:"#d4af37",
      background:"#09090b",
      card:"#18181b"
    }
  }

};


export type ThemeName =
keyof typeof themes;
