import { Container } from 'react-bootstrap'

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/6311377/pexels-photo-6311377.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Stylish woman wearing a digital outfit'
  },
  {
    src: 'https://images.pexels.com/photos/7679467/pexels-photo-7679467.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Man browsing fashion looks on a tablet'
  },
  {
    src: 'https://images.pexels.com/photos/6311340/pexels-photo-6311340.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Designer reviewing 3D garment render'
  },
  {
    src: 'https://images.pexels.com/photos/7679575/pexels-photo-7679575.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Fashion stylist curating outfits on laptop'
  },
  {
    src: 'https://images.pexels.com/photos/6311253/pexels-photo-6311253.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Virtual fitting experience preview screens'
  },
  {
    src: 'https://images.pexels.com/photos/7679401/pexels-photo-7679401.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Team collaborating on fashion technology'
  }
]

const Gallery = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="section-heading">
          <h2>Immersive Lookbook</h2>
          <p>
            Explore our virtual try-on visuals showcasing fabric realism, pose diversity, and cross-device continuity.
            All imagery sourced from Pexels creators under free-use licensing.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="m-0">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
