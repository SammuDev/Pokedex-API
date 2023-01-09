import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ButtonSubmit from '../styles/ButtonSubmit';
import EnUs from '../styles/EnUs';
import Input from '../styles/Input';
import Logo from '../styles/Logo';
import MainBox from '../styles/MainBox';

import Nav from '../styles/Nav';
import PokeBoxIMG from '../styles/PokeBoxIMG';

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
              <Image src="./img/settings.svg"
                width={25}
                height={25}
                alt='Pokebola do Dash'/>
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
            <Input/>
            <ButtonSubmit>
              <Link href="/pokedex">Acessar</Link>
            </ButtonSubmit>
            {/* <Link href={'/pokedex'}>Pokedex Page</Link> */}
          </form>
        </MainBox>
      </main>
    </div>
  );
};
