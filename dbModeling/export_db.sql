--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE "PoGoTrades";




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md53175bce1d3201d16594cebf9d7eb3f9d';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Debian 12.2-2.pgdg100+1)
-- Dumped by pg_dump version 12.2 (Debian 12.2-2.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "PoGoTrades" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Debian 12.2-2.pgdg100+1)
-- Dumped by pg_dump version 12.2 (Debian 12.2-2.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: PoGoTrades; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "PoGoTrades" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE "PoGoTrades" OWNER TO postgres;

\connect "PoGoTrades"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_PokemonMoves_Legacy; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_PokemonMoves_Legacy" AS ENUM (
    'Fast',
    'Charge1',
    'Charge2',
    'Both',
    'None'
);


ALTER TYPE public."enum_PokemonMoves_Legacy" OWNER TO postgres;

--
-- Name: enum_PokemonMoves_legacy; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_PokemonMoves_legacy" AS ENUM (
    'Fast',
    'Charge1',
    'Charge2',
    'Both',
    'None'
);


ALTER TYPE public."enum_PokemonMoves_legacy" OWNER TO postgres;

--
-- Name: enum_Pokemons_Category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Pokemons_Category" AS ENUM (
    'Common',
    'Legendary',
    'Mythical'
);


ALTER TYPE public."enum_Pokemons_Category" OWNER TO postgres;

--
-- Name: enum_Pokemons_category; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Pokemons_category" AS ENUM (
    'Common',
    'Legendary',
    'Mythical'
);


ALTER TYPE public."enum_Pokemons_category" OWNER TO postgres;

--
-- Name: enum_Trades_State; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Trades_State" AS ENUM (
    'Scheduled',
    'Done',
    'Canceled'
);


ALTER TYPE public."enum_Trades_State" OWNER TO postgres;

--
-- Name: enum_Trades_state; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Trades_state" AS ENUM (
    'Scheduled',
    'Done',
    'Canceled'
);


ALTER TYPE public."enum_Trades_state" OWNER TO postgres;

--
-- Name: enum_Users_Team; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Users_Team" AS ENUM (
    'Instinct',
    'Mystic',
    'Valor',
    'Harmony'
);


ALTER TYPE public."enum_Users_Team" OWNER TO postgres;

--
-- Name: enum_Users_team; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Users_team" AS ENUM (
    'Instinct',
    'Mystic',
    'Valor',
    'Harmony'
);


ALTER TYPE public."enum_Users_team" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Moves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Moves" (
    "Id" integer NOT NULL,
    "Name" character varying(100) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "TypeId" integer NOT NULL
);


ALTER TABLE public."Moves" OWNER TO postgres;

--
-- Name: Moves_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Moves_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Moves_Id_seq" OWNER TO postgres;

--
-- Name: Moves_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Moves_Id_seq" OWNED BY public."Moves"."Id";


--
-- Name: PokemonMoves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PokemonMoves" (
    "Id" integer NOT NULL,
    "Legacy" public."enum_PokemonMoves_Legacy" DEFAULT 'None'::public."enum_PokemonMoves_Legacy" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "FastMoveId" integer NOT NULL,
    "ChargeMove1Id" integer NOT NULL,
    "ChargeMove2Id" integer,
    "PokemonId" integer NOT NULL
);


ALTER TABLE public."PokemonMoves" OWNER TO postgres;

--
-- Name: PokemonMoves_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PokemonMoves_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PokemonMoves_Id_seq" OWNER TO postgres;

--
-- Name: PokemonMoves_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PokemonMoves_Id_seq" OWNED BY public."PokemonMoves"."Id";


--
-- Name: Pokemons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pokemons" (
    "Id" integer NOT NULL,
    "Pokedex" smallint NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Alolan" boolean DEFAULT false NOT NULL,
    "Shiny" boolean DEFAULT false NOT NULL,
    "Regional" boolean DEFAULT false NOT NULL,
    "Purified" boolean DEFAULT false NOT NULL,
    "Baby" boolean DEFAULT false NOT NULL,
    "CanBeTraded" boolean DEFAULT true NOT NULL,
    "Category" public."enum_Pokemons_Category" DEFAULT 'Common'::public."enum_Pokemons_Category" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "RegionId" integer NOT NULL,
    "Type1Id" integer NOT NULL,
    "Type2Id" integer
);


ALTER TABLE public."Pokemons" OWNER TO postgres;

--
-- Name: Pokemons_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pokemons_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pokemons_Id_seq" OWNER TO postgres;

--
-- Name: Pokemons_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pokemons_Id_seq" OWNED BY public."Pokemons"."Id";


--
-- Name: Regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Regions" (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Generation" smallint NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Regions" OWNER TO postgres;

--
-- Name: Regions_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Regions_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Regions_Id_seq" OWNER TO postgres;

--
-- Name: Regions_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Regions_Id_seq" OWNED BY public."Regions"."Id";


--
-- Name: Trades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Trades" (
    "Id" integer NOT NULL,
    "TradeCost" integer NOT NULL,
    "SpecialTrade" boolean DEFAULT false NOT NULL,
    "LuckyTrade" boolean DEFAULT false NOT NULL,
    "BothRegistered" boolean DEFAULT true NOT NULL,
    "FriendshipLevel" smallint DEFAULT 1 NOT NULL,
    "State" public."enum_Trades_State" DEFAULT 'Scheduled'::public."enum_Trades_State" NOT NULL,
    "Observation" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "Pokemon1Id" integer NOT NULL,
    "Pokemon2Id" integer NOT NULL,
    "Trainer1Id" integer NOT NULL,
    "Trainer2Id" integer NOT NULL
);


ALTER TABLE public."Trades" OWNER TO postgres;

--
-- Name: Trades_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Trades_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Trades_Id_seq" OWNER TO postgres;

--
-- Name: Trades_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Trades_Id_seq" OWNED BY public."Trades"."Id";


--
-- Name: Types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Types" (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Types" OWNER TO postgres;

--
-- Name: Types_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Types_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Types_Id_seq" OWNER TO postgres;

--
-- Name: Types_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Types_Id_seq" OWNED BY public."Types"."Id";


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    "Id" integer NOT NULL,
    "Username" character varying(50) NOT NULL,
    "Team" public."enum_Users_Team" DEFAULT 'Harmony'::public."enum_Users_Team" NOT NULL,
    "Level" smallint DEFAULT 0 NOT NULL,
    "PasswordHash" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_Id_seq" OWNER TO postgres;

--
-- Name: Users_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_Id_seq" OWNED BY public."Users"."Id";


--
-- Name: tutorials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tutorials (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    published boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tutorials OWNER TO postgres;

--
-- Name: tutorials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tutorials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tutorials_id_seq OWNER TO postgres;

--
-- Name: tutorials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tutorials_id_seq OWNED BY public.tutorials.id;


--
-- Name: Moves Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves" ALTER COLUMN "Id" SET DEFAULT nextval('public."Moves_Id_seq"'::regclass);


--
-- Name: PokemonMoves Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves" ALTER COLUMN "Id" SET DEFAULT nextval('public."PokemonMoves_Id_seq"'::regclass);


--
-- Name: Pokemons Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons" ALTER COLUMN "Id" SET DEFAULT nextval('public."Pokemons_Id_seq"'::regclass);


--
-- Name: Regions Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Regions" ALTER COLUMN "Id" SET DEFAULT nextval('public."Regions_Id_seq"'::regclass);


--
-- Name: Trades Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades" ALTER COLUMN "Id" SET DEFAULT nextval('public."Trades_Id_seq"'::regclass);


--
-- Name: Types Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Types" ALTER COLUMN "Id" SET DEFAULT nextval('public."Types_Id_seq"'::regclass);


--
-- Name: Users Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN "Id" SET DEFAULT nextval('public."Users_Id_seq"'::regclass);


--
-- Name: tutorials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tutorials ALTER COLUMN id SET DEFAULT nextval('public.tutorials_id_seq'::regclass);


--
-- Data for Name: Moves; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Moves" ("Id", "Name", "createdAt", "updatedAt", "TypeId") FROM stdin;
1	Fast Move Test	2020-03-23 14:08:08.582+00	2020-03-23 14:08:08.582+00	1
2	Charge Move Test	2020-03-23 14:08:08.582+00	2020-03-23 14:08:08.582+00	1
\.


--
-- Data for Name: PokemonMoves; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PokemonMoves" ("Id", "Legacy", "createdAt", "updatedAt", "FastMoveId", "ChargeMove1Id", "ChargeMove2Id", "PokemonId") FROM stdin;
1	None	2020-03-23 14:08:08.587+00	2020-03-23 14:08:08.587+00	1	2	\N	1
\.


--
-- Data for Name: Pokemons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pokemons" ("Id", "Pokedex", "Name", "Alolan", "Shiny", "Regional", "Purified", "Baby", "CanBeTraded", "Category", "createdAt", "updatedAt", "RegionId", "Type1Id", "Type2Id") FROM stdin;
1	1	Bulbasaur	f	f	f	f	f	t	Common	2020-03-23 14:08:08.583+00	2020-03-23 14:08:08.583+00	1	1	\N
\.


--
-- Data for Name: Regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Regions" ("Id", "Name", "Generation", "createdAt", "updatedAt") FROM stdin;
1	Johto	1	2020-03-23 14:08:08.581+00	2020-03-23 14:08:08.581+00
\.


--
-- Data for Name: Trades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Trades" ("Id", "TradeCost", "SpecialTrade", "LuckyTrade", "BothRegistered", "FriendshipLevel", "State", "Observation", "createdAt", "updatedAt", "Pokemon1Id", "Pokemon2Id", "Trainer1Id", "Trainer2Id") FROM stdin;
1	100	f	f	t	1	Scheduled	\N	2020-03-23 14:08:08.588+00	2020-03-23 14:08:08.588+00	1	1	2	1
\.


--
-- Data for Name: Types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Types" ("Id", "Name", "createdAt", "updatedAt") FROM stdin;
1	Fire	2020-03-23 14:08:08.58+00	2020-03-23 14:08:08.58+00
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" ("Id", "Username", "Team", "Level", "PasswordHash", "createdAt", "updatedAt") FROM stdin;
1	MasterPrinter	Instinct	40	\N	2020-03-23 14:08:08.585+00	2020-03-23 14:08:08.585+00
2	Emap20	Instinct	40	\N	2020-03-23 14:08:08.586+00	2020-03-23 14:08:08.586+00
\.


--
-- Data for Name: tutorials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tutorials (id, title, description, published, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Moves_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Moves_Id_seq"', 2, true);


--
-- Name: PokemonMoves_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PokemonMoves_Id_seq"', 1, true);


--
-- Name: Pokemons_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pokemons_Id_seq"', 1, true);


--
-- Name: Regions_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Regions_Id_seq"', 1, true);


--
-- Name: Trades_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Trades_Id_seq"', 1, true);


--
-- Name: Types_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Types_Id_seq"', 1, true);


--
-- Name: Users_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_Id_seq"', 2, true);


--
-- Name: tutorials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tutorials_id_seq', 1, false);


--
-- Name: Moves Moves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves"
    ADD CONSTRAINT "Moves_pkey" PRIMARY KEY ("Id");


--
-- Name: PokemonMoves PokemonMoves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves"
    ADD CONSTRAINT "PokemonMoves_pkey" PRIMARY KEY ("Id");


--
-- Name: Pokemons Pokemons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("Id");


--
-- Name: Regions Regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Regions"
    ADD CONSTRAINT "Regions_pkey" PRIMARY KEY ("Id");


--
-- Name: Trades Trades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_pkey" PRIMARY KEY ("Id");


--
-- Name: Types Types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Types"
    ADD CONSTRAINT "Types_pkey" PRIMARY KEY ("Id");


--
-- Name: Users Users_Username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_Username_key" UNIQUE ("Username");


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("Id");


--
-- Name: tutorials tutorials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tutorials
    ADD CONSTRAINT tutorials_pkey PRIMARY KEY (id);


--
-- Name: Moves Moves_TypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves"
    ADD CONSTRAINT "Moves_TypeId_fkey" FOREIGN KEY ("TypeId") REFERENCES public."Types"("Id") ON UPDATE CASCADE;


--
-- Name: PokemonMoves PokemonMoves_ChargeMove1Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves"
    ADD CONSTRAINT "PokemonMoves_ChargeMove1Id_fkey" FOREIGN KEY ("ChargeMove1Id") REFERENCES public."Moves"("Id") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PokemonMoves PokemonMoves_ChargeMove2Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves"
    ADD CONSTRAINT "PokemonMoves_ChargeMove2Id_fkey" FOREIGN KEY ("ChargeMove2Id") REFERENCES public."Moves"("Id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: PokemonMoves PokemonMoves_FastMoveId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves"
    ADD CONSTRAINT "PokemonMoves_FastMoveId_fkey" FOREIGN KEY ("FastMoveId") REFERENCES public."Moves"("Id") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PokemonMoves PokemonMoves_PokemonId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMoves"
    ADD CONSTRAINT "PokemonMoves_PokemonId_fkey" FOREIGN KEY ("PokemonId") REFERENCES public."Pokemons"("Id") ON UPDATE CASCADE;


--
-- Name: Pokemons Pokemons_RegionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_RegionId_fkey" FOREIGN KEY ("RegionId") REFERENCES public."Regions"("Id") ON UPDATE CASCADE;


--
-- Name: Pokemons Pokemons_Type1Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_Type1Id_fkey" FOREIGN KEY ("Type1Id") REFERENCES public."Types"("Id") ON UPDATE CASCADE;


--
-- Name: Pokemons Pokemons_Type2Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_Type2Id_fkey" FOREIGN KEY ("Type2Id") REFERENCES public."Types"("Id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Trades Trades_Pokemon1Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_Pokemon1Id_fkey" FOREIGN KEY ("Pokemon1Id") REFERENCES public."Pokemons"("Id") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Trades Trades_Pokemon2Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_Pokemon2Id_fkey" FOREIGN KEY ("Pokemon2Id") REFERENCES public."Pokemons"("Id") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Trades Trades_Trainer1Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_Trainer1Id_fkey" FOREIGN KEY ("Trainer1Id") REFERENCES public."Users"("Id") ON UPDATE CASCADE;


--
-- Name: Trades Trades_Trainer2Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_Trainer2Id_fkey" FOREIGN KEY ("Trainer2Id") REFERENCES public."Users"("Id") ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Debian 12.2-2.pgdg100+1)
-- Dumped by pg_dump version 12.2 (Debian 12.2-2.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

