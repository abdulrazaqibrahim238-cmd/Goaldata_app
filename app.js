const matches = [
  {
    league: "Premier League",
    home: "Arsenal",
    away: "Chelsea",
    score: "-",
    time: "15:00",
    status: "Upcoming"
  },
  {
    league: "La Liga",
    home: "Real Madrid",
    away: "Barcelona",
    score: "-",
    time: "20:00",
    status: "Upcoming"
  },
  {
    league: "Serie A",
    home: "Inter Milan",
    away: "AC Milan",
    score: "-",
    time: "18:00",
    status: "Upcoming"
  },
  {
    league: "Bundesliga",
    home: "Bayern Munich",
    away: "Dortmund",
    score: "-",
    time: "17:30",
    status: "Upcoming"
  },
  {
    league: "Ligue 1",
    home: "PSG",
    away: "Marseille",
    score: "-",
    time: "21:00",
    status: "Upcoming"
  }
];

const leagues = [
  "🏴 Premier League",
  "🏴 Championship",
  "🏴 League One",
  "🏴 League Two",
  "🏴 FA Cup",
  "🇪🇸 La Liga",
  "🇪🇸 La Liga 2",
  "🇪🇸 Copa del Rey",
  "🇩🇪 Bundesliga",
  "🇩🇪 2. Bundesliga",
  "🇩🇪 DFB-Pokal",
  "🇮🇹 Serie A",
  "🇮🇹 Serie B",
  "🇮🇹 Coppa Italia",
  "🇫🇷 Ligue 1",
  "🇫🇷 Ligue 2",
  "🇳🇱 Eredivisie",
  "🇵🇹 Primeira Liga",
  "🇹🇷 Süper Lig",
  "🇧🇪 Pro League",
  "🇬🇷 Super League",
  "🇷🇸 SuperLiga",
  "🇭🇷 HNL",
  "🇵🇱 Ekstraklasa",
  "🇸🇪 Allsvenskan",
  "🇳🇴 Eliteserien",
  "🇩🇰 Superliga",
  "🇦🇹 Bundesliga",
  "🇨🇭 Super League",
  "🇺🇸 MLS",
  "🇲🇽 Liga MX",
  "🇧🇷 Série A",
  "🇧🇷 Série B",
  "🇦🇷 Liga Profesional",
  "🇨🇴 Primera División",
  "🇨🇱 Primera División",
  "🇯🇵 J1 League",
  "🇰🇷 K League 1",
  "🇨🇳 Chinese Super League",
  "🇸🇦 Saudi Pro League",
  "🇦🇺 A-League",
  "🇮🇳 Indian Super League",
  "🇳🇬 Nigeria Premier Football League",
  "🇪🇬 Egyptian Premier League",
  "🇿🇦 South African Premiership",
  "🇲🇦 Botola Pro",
  "🇩🇿 Algerian Ligue 1",
  "🇹🇳 Tunisian Ligue 1",
  "🇦🇴 Girabola",
  "🏆 UEFA Champions League",
  "🏆 UEFA Europa League",
  "🏆 UEFA Conference League",
  "🏆 Copa Libertadores",
  "🏆 Copa Sudamericana",
  "🏆 AFC Champions League",
  "🏆 CAF Champions League",
  "🏆 CONCACAF Champions Cup",
  "🌍 FIFA Club World Cup",
  "🌍 FIFA World Cup",
  "🌍 AFCON",
  "🌍 Copa América",
  "🌍 UEFA EURO",
  "🌍 Asian Cup",
  "🌍 Gold Cup"
];

function updateClock() {
  const now = new Date();

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  if (clock) {
    clock.textContent = now.toLocaleString();
  }

  if (date) {
    date.textContent = now.toLocale
