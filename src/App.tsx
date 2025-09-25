import logo from "./assets/logo.jpg";
import styled from "styled-components";
import { FaBandcamp, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.img`
  width: auto;
  max-height: 20rem;
  max-width: 100%;
`;

const SpotifyFrame = styled.iframe`
  border: 0;
  height: 40rem;
  max-width: 100%;
`;

const YouTubeFrame = styled.iframe`
  border: 0;
  min-height: 15rem;
  max-width: 100%;
`;

const MerchProduct = styled.img`
  width: 100%;
  max-width: 20rem;
  border-radius: 0.25rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.025);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;

  section {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    max-width: 30rem;
    min-width: 20rem;
    text-align: center;
    gap: 1rem;
  }
`;

const MerchSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const FollowLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const LinkButton = styled.button<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${({ $color }) =>
    $color ? `color-mix(in srgb, ${$color} 70%, white)` : "#1db954"};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  color: black;

  & > svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ $color }) =>
      $color ? `color-mix(in srgb, ${$color} 80%, white)` : "#1ed760"};
  }
`;

export const App = () => {
  return (
    <Page>
      <Header>
        <Logo src={logo} alt="Color Beneath Shadows logo" />
      </Header>
      <Container>
        <section>
          <h2>Listen to our songs</h2>
          <SpotifyFrame
            src="https://open.spotify.com/embed/artist/1rwRuu9QpzVE0Rm634ehvp?utm_source=generator&theme=1"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </section>
        <section>
          <h2>Check out our music videos</h2>
          <YouTubeFrame
            src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_mzkGfVyiPxDrZdh4F6-1FO1PGVBgZH7Rk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h2>You can also find us here</h2>
          <FollowLinks>
            <a href="https://open.spotify.com/artist/1rwRuu9QpzVE0Rm634ehvp?si=5lR1Q4TYStqh7DIuI7GXTw">
              <LinkButton $color="#1DB954">
                <FaSpotify />
                <span>Spotify</span>
              </LinkButton>
            </a>
            <a href="https://colorsbeneathshadows.bandcamp.com/">
              <LinkButton $color="#1DA0C3">
                <FaBandcamp />
                <span>Bandcamp</span>
              </LinkButton>
            </a>
            <a href="https://www.youtube.com/channel/UCqpG-ti6ulVZkLS4A7b-ufw">
              <LinkButton $color="#FF0000">
                <FaYoutube />
                <span>YouTube</span>
              </LinkButton>
            </a>
            <a href="https://www.instagram.com/colorsbeneathshadows/">
              <LinkButton $color="#FF0069">
                <FaInstagram />
                <span>Instagram</span>
              </LinkButton>
            </a>
          </FollowLinks>
        </section>
        <section>
          <h2>Buy our merch</h2>
          <MerchSelection>
            <a href="https://www.unomas.fi/en/product/colors-beneath-shadows-trucker-cap">
              <MerchProduct
                src="https://images.finqu.com/de183eac7faaf3f4715564ab96cfd1a54f55f5df03c3b6880560dc3ba8334a75/5-panel-trucker-cap-black-front-67937f39b013d_1.jpg?w=530&h=530"
                alt="Color Beneath Shadows trucker cap"
              />
            </a>
            <a href="https://www.unomas.fi/en/product/colors-beneath-shadows-premium-college-hoodies">
              <MerchProduct
                src="https://images.finqu.com/de183eac7faaf3f4715564ab96cfd1a54f55f5df03c3b6880560dc3ba8334a75/unisex-premium-hoodie-black-front-6793815dd1a9a_1.jpg?w=530&h=530"
                alt="Color Beneath Shadows Premium College Hoodie"
              />
            </a>
          </MerchSelection>
        </section>
      </Container>
    </Page>
  );
};
