import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ButtonSubmit from '../styles/styledsHome/ButtonSubmit';
import EnUs from '../styles/styledsHome/EnUs';
import Input from '../styles/styledsHome/Input';
import Logo from '../styles/styledsHome/Logo';
import MainBox from '../styles/styledsHome/MainBox';

import Nav from '../styles/styledsHome/Nav';
import PokeBoxIMG from '../styles/styledsHome/PokeBoxIMG';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Nav>
            <Logo />

            <EnUs>
              {/* <Image src="./img/settings.svg"
                width={25}
                height={25}
                alt='Pokebola do Dash'/> */}
            </EnUs>
          </Nav>
        </header>

        <MainBox>
          <PokeBoxIMG>
            <Image src='./img/pokeball.svg'
              width={100}
              height={100}
              alt='Pokebox of Dash'/>
          </PokeBoxIMG>

          <form>
            {/* <Input/> */}
            <Link href="/pokedex">
              <ButtonSubmit>Acessar</ButtonSubmit>
            </Link>
          </form>
        </MainBox>
      </main>
    </div>
  );
};
