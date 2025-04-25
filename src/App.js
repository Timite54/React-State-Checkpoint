
import { Component } from "react"
import "./App.css"

// Composant principal basé sur une classe
class App extends Component {
  // Définition de l'état initial
  state = {
    personne: {
      fullName: "Timité Namory Charles",
      bio: "Développeur passionné avec 2 ans d'expérience en développement web.",
      imgSrc: "/profile.jpg",
      profession: "Développeur Web",
    },
    montre: false, // État pour afficher ou masquer le profil
    tempsEcoule: 0, // Temps écoulé depuis le montage du composant
  }

  // Variable pour stocker l'ID de l'intervalle
  intervalId = null

  // Méthode du cycle de vie - s'exécute après le montage du composant
  componentDidMount() {
    // Initialisation de l'intervalle pour mettre à jour le temps écoulé
    this.intervalId = setInterval(() => {
      this.setState({ tempsEcoule: this.state.tempsEcoule + 1 })
    }, 1000)
  }

  // Méthode du cycle de vie - s'exécute avant le démontage du composant
  componentWillUnmount() {
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.intervalId)
  }

  // Méthode pour basculer l'affichage du profil
  toggleProfil = () => {
    this.setState({ montre: !this.state.montre })
  }

  // Méthode de rendu du composant
  render() {
    const { personne, montre, tempsEcoule } = this.state

    return (
      <div className="container">
        <h1>React State Checkpoint</h1>

        {/* Bouton pour basculer l'affichage du profil */}
        <button onClick={this.toggleProfil}>{montre ? "Masquer le profil" : "Afficher le profil"}</button>

        {/* Affichage du temps écoulé */}
        <p className="timer">Temps écoulé: {tempsEcoule} secondes</p>

        {/* Affichage conditionnel du profil */}
        {montre && (
          <div className="profile">
            <img src={personne.imgSrc || "./public/profile.jpg"} alt={personne.fullName} />
            <h2>{personne.fullName}</h2>
            <p className="profession">{personne.profession}</p>
            <p className="bio">{personne.bio}</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
