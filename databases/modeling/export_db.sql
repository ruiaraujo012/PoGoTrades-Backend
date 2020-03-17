--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-03-17 20:41:43 WET

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16814)
-- Name: Moves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Moves" (
    "MoveID" integer NOT NULL,
    "Name" character varying(100) NOT NULL,
    "TypeID" integer NOT NULL
);


ALTER TABLE public."Moves" OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16817)
-- Name: Moves_MoveID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Moves_MoveID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Moves_MoveID_seq" OWNER TO postgres;

--
-- TOC entry 3275 (class 0 OID 0)
-- Dependencies: 203
-- Name: Moves_MoveID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Moves_MoveID_seq" OWNED BY public."Moves"."MoveID";


--
-- TOC entry 204 (class 1259 OID 16819)
-- Name: PokemonMove; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PokemonMove" (
    "PokemonMoveID" integer NOT NULL,
    "PokemonID" integer NOT NULL,
    "Legacy" character varying(15) NOT NULL,
    "FastMoveID" integer NOT NULL,
    "ChargeMove1ID" integer NOT NULL,
    "ChargeMove2ID" integer
);


ALTER TABLE public."PokemonMove" OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16822)
-- Name: PokemonMove_PokemonMoveID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PokemonMove_PokemonMoveID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PokemonMove_PokemonMoveID_seq" OWNER TO postgres;

--
-- TOC entry 3276 (class 0 OID 0)
-- Dependencies: 205
-- Name: PokemonMove_PokemonMoveID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PokemonMove_PokemonMoveID_seq" OWNED BY public."PokemonMove"."PokemonMoveID";


--
-- TOC entry 206 (class 1259 OID 16824)
-- Name: Pokemons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pokemons" (
    "PokemonID" integer NOT NULL,
    "Pokedex" smallint NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Alolan" boolean NOT NULL,
    "Shiny" boolean NOT NULL,
    "Regional" boolean NOT NULL,
    "Purified" boolean NOT NULL,
    "Baby" boolean NOT NULL,
    "RegionID" integer NOT NULL,
    "Category" character varying(50) NOT NULL,
    "CanBeTraded" boolean NOT NULL,
    "Type1ID" integer NOT NULL,
    "Type2ID" integer
);


ALTER TABLE public."Pokemons" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16827)
-- Name: Pokemons_PokemonID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pokemons_PokemonID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pokemons_PokemonID_seq" OWNER TO postgres;

--
-- TOC entry 3277 (class 0 OID 0)
-- Dependencies: 207
-- Name: Pokemons_PokemonID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pokemons_PokemonID_seq" OWNED BY public."Pokemons"."PokemonID";


--
-- TOC entry 208 (class 1259 OID 16829)
-- Name: Regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Regions" (
    "RegionID" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Generation" smallint NOT NULL
);


ALTER TABLE public."Regions" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16832)
-- Name: Regions_RegionID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Regions_RegionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Regions_RegionID_seq" OWNER TO postgres;

--
-- TOC entry 3278 (class 0 OID 0)
-- Dependencies: 209
-- Name: Regions_RegionID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Regions_RegionID_seq" OWNED BY public."Regions"."RegionID";


--
-- TOC entry 210 (class 1259 OID 16834)
-- Name: Trades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Trades" (
    "TradeID" integer NOT NULL,
    "Trainer1ID" integer NOT NULL,
    "Trainer2ID" integer NOT NULL,
    "Pokemon1ID" integer NOT NULL,
    "Pokemon2ID" integer NOT NULL,
    "TradeCost" integer,
    "SpecialTrade" boolean,
    "LuckyTrade" boolean,
    "Observation" text,
    "State" character varying(20) NOT NULL,
    "BothRegistered" boolean NOT NULL,
    "FriendshipLevel" smallint NOT NULL
);


ALTER TABLE public."Trades" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16840)
-- Name: Trades_TradeID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Trades_TradeID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Trades_TradeID_seq" OWNER TO postgres;

--
-- TOC entry 3279 (class 0 OID 0)
-- Dependencies: 211
-- Name: Trades_TradeID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Trades_TradeID_seq" OWNED BY public."Trades"."TradeID";


--
-- TOC entry 215 (class 1259 OID 16916)
-- Name: Types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Types" (
    "TypeID" integer NOT NULL,
    "Name" character varying(50) NOT NULL
);


ALTER TABLE public."Types" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16914)
-- Name: Types_TypeID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Types_TypeID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Types_TypeID_seq" OWNER TO postgres;

--
-- TOC entry 3280 (class 0 OID 0)
-- Dependencies: 214
-- Name: Types_TypeID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Types_TypeID_seq" OWNED BY public."Types"."TypeID";


--
-- TOC entry 212 (class 1259 OID 16842)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    "UserID" integer NOT NULL,
    "Username" character varying(100) NOT NULL,
    "Team" character varying(10),
    "Level" smallint,
    "PasswordHash" text
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16845)
-- Name: Users_UserID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_UserID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_UserID_seq" OWNER TO postgres;

--
-- TOC entry 3281 (class 0 OID 0)
-- Dependencies: 213
-- Name: Users_UserID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_UserID_seq" OWNED BY public."Users"."UserID";


--
-- TOC entry 3097 (class 2604 OID 16404)
-- Name: Moves MoveID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves" ALTER COLUMN "MoveID" SET DEFAULT nextval('public."Moves_MoveID_seq"'::regclass);


--
-- TOC entry 3098 (class 2604 OID 16405)
-- Name: PokemonMove PokemonMoveID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove" ALTER COLUMN "PokemonMoveID" SET DEFAULT nextval('public."PokemonMove_PokemonMoveID_seq"'::regclass);


--
-- TOC entry 3099 (class 2604 OID 16406)
-- Name: Pokemons PokemonID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons" ALTER COLUMN "PokemonID" SET DEFAULT nextval('public."Pokemons_PokemonID_seq"'::regclass);


--
-- TOC entry 3100 (class 2604 OID 16407)
-- Name: Regions RegionID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Regions" ALTER COLUMN "RegionID" SET DEFAULT nextval('public."Regions_RegionID_seq"'::regclass);


--
-- TOC entry 3101 (class 2604 OID 16408)
-- Name: Trades TradeID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades" ALTER COLUMN "TradeID" SET DEFAULT nextval('public."Trades_TradeID_seq"'::regclass);


--
-- TOC entry 3103 (class 2604 OID 16919)
-- Name: Types TypeID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Types" ALTER COLUMN "TypeID" SET DEFAULT nextval('public."Types_TypeID_seq"'::regclass);


--
-- TOC entry 3102 (class 2604 OID 16409)
-- Name: Users UserID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN "UserID" SET DEFAULT nextval('public."Users_UserID_seq"'::regclass);


--
-- TOC entry 3256 (class 0 OID 16814)
-- Dependencies: 202
-- Data for Name: Moves; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Moves" ("MoveID", "Name", "TypeID") FROM stdin;
\.


--
-- TOC entry 3258 (class 0 OID 16819)
-- Dependencies: 204
-- Data for Name: PokemonMove; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PokemonMove" ("PokemonMoveID", "PokemonID", "Legacy", "FastMoveID", "ChargeMove1ID", "ChargeMove2ID") FROM stdin;
\.


--
-- TOC entry 3260 (class 0 OID 16824)
-- Dependencies: 206
-- Data for Name: Pokemons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pokemons" ("PokemonID", "Pokedex", "Name", "Alolan", "Shiny", "Regional", "Purified", "Baby", "RegionID", "Category", "CanBeTraded", "Type1ID", "Type2ID") FROM stdin;
\.


--
-- TOC entry 3262 (class 0 OID 16829)
-- Dependencies: 208
-- Data for Name: Regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Regions" ("RegionID", "Name", "Generation") FROM stdin;
\.


--
-- TOC entry 3264 (class 0 OID 16834)
-- Dependencies: 210
-- Data for Name: Trades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Trades" ("TradeID", "Trainer1ID", "Trainer2ID", "Pokemon1ID", "Pokemon2ID", "TradeCost", "SpecialTrade", "LuckyTrade", "Observation", "State", "BothRegistered", "FriendshipLevel") FROM stdin;
\.


--
-- TOC entry 3269 (class 0 OID 16916)
-- Dependencies: 215
-- Data for Name: Types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Types" ("TypeID", "Name") FROM stdin;
\.


--
-- TOC entry 3266 (class 0 OID 16842)
-- Dependencies: 212
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" ("UserID", "Username", "Team", "Level", "PasswordHash") FROM stdin;
\.


--
-- TOC entry 3282 (class 0 OID 0)
-- Dependencies: 203
-- Name: Moves_MoveID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Moves_MoveID_seq"', 1, false);


--
-- TOC entry 3283 (class 0 OID 0)
-- Dependencies: 205
-- Name: PokemonMove_PokemonMoveID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PokemonMove_PokemonMoveID_seq"', 1, false);


--
-- TOC entry 3284 (class 0 OID 0)
-- Dependencies: 207
-- Name: Pokemons_PokemonID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pokemons_PokemonID_seq"', 1, false);


--
-- TOC entry 3285 (class 0 OID 0)
-- Dependencies: 209
-- Name: Regions_RegionID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Regions_RegionID_seq"', 1, false);


--
-- TOC entry 3286 (class 0 OID 0)
-- Dependencies: 211
-- Name: Trades_TradeID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Trades_TradeID_seq"', 1, false);


--
-- TOC entry 3287 (class 0 OID 0)
-- Dependencies: 214
-- Name: Types_TypeID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Types_TypeID_seq"', 1, false);


--
-- TOC entry 3288 (class 0 OID 0)
-- Dependencies: 213
-- Name: Users_UserID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_UserID_seq"', 1, false);


--
-- TOC entry 3105 (class 2606 OID 16410)
-- Name: Moves Moves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves"
    ADD CONSTRAINT "Moves_pkey" PRIMARY KEY ("MoveID");


--
-- TOC entry 3109 (class 2606 OID 16412)
-- Name: Pokemons PokemonID_PK; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "PokemonID_PK" PRIMARY KEY ("PokemonID");


--
-- TOC entry 3107 (class 2606 OID 16413)
-- Name: PokemonMove PokemonMoveID_PK; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove"
    ADD CONSTRAINT "PokemonMoveID_PK" PRIMARY KEY ("PokemonMoveID");


--
-- TOC entry 3111 (class 2606 OID 16414)
-- Name: Regions Regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Regions"
    ADD CONSTRAINT "Regions_pkey" PRIMARY KEY ("RegionID");


--
-- TOC entry 3113 (class 2606 OID 16415)
-- Name: Trades Trades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trades_pkey" PRIMARY KEY ("TradeID");


--
-- TOC entry 3117 (class 2606 OID 16921)
-- Name: Types Types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Types"
    ADD CONSTRAINT "Types_pkey" PRIMARY KEY ("TypeID");


--
-- TOC entry 3115 (class 2606 OID 16416)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID");


--
-- TOC entry 3119 (class 2606 OID 16417)
-- Name: PokemonMove ChargeMove1ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove"
    ADD CONSTRAINT "ChargeMove1ID_FK" FOREIGN KEY ("ChargeMove1ID") REFERENCES public."Moves"("MoveID") NOT VALID;


--
-- TOC entry 3120 (class 2606 OID 16422)
-- Name: PokemonMove ChargeMove2ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove"
    ADD CONSTRAINT "ChargeMove2ID_FK" FOREIGN KEY ("ChargeMove2ID") REFERENCES public."Moves"("MoveID") NOT VALID;


--
-- TOC entry 3121 (class 2606 OID 16427)
-- Name: PokemonMove FastMoveID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove"
    ADD CONSTRAINT "FastMoveID_FK" FOREIGN KEY ("FastMoveID") REFERENCES public."Moves"("MoveID") NOT VALID;


--
-- TOC entry 3118 (class 2606 OID 16932)
-- Name: Moves Moves_TypeID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Moves"
    ADD CONSTRAINT "Moves_TypeID_fkey" FOREIGN KEY ("TypeID") REFERENCES public."Types"("TypeID") NOT VALID;


--
-- TOC entry 3126 (class 2606 OID 16432)
-- Name: Trades Pokemon1ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Pokemon1ID_FK" FOREIGN KEY ("Pokemon1ID") REFERENCES public."Pokemons"("PokemonID") NOT VALID;


--
-- TOC entry 3127 (class 2606 OID 16437)
-- Name: Trades Pokemon2ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Pokemon2ID_FK" FOREIGN KEY ("Pokemon2ID") REFERENCES public."Pokemons"("PokemonID") NOT VALID;


--
-- TOC entry 3122 (class 2606 OID 16442)
-- Name: PokemonMove PokemonID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PokemonMove"
    ADD CONSTRAINT "PokemonID_FK" FOREIGN KEY ("PokemonID") REFERENCES public."Pokemons"("PokemonID") NOT VALID;


--
-- TOC entry 3123 (class 2606 OID 16447)
-- Name: Pokemons Pokemons_RegionID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_RegionID_fkey" FOREIGN KEY ("RegionID") REFERENCES public."Regions"("RegionID");


--
-- TOC entry 3124 (class 2606 OID 16922)
-- Name: Pokemons Pokemons_Type1ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_Type1ID_fkey" FOREIGN KEY ("Type1ID") REFERENCES public."Types"("TypeID") NOT VALID;


--
-- TOC entry 3125 (class 2606 OID 16927)
-- Name: Pokemons Pokemons_Type2ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pokemons"
    ADD CONSTRAINT "Pokemons_Type2ID_fkey" FOREIGN KEY ("Type2ID") REFERENCES public."Types"("TypeID") NOT VALID;


--
-- TOC entry 3128 (class 2606 OID 16452)
-- Name: Trades Trainer1ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trainer1ID_FK" FOREIGN KEY ("Trainer1ID") REFERENCES public."Users"("UserID") NOT VALID;


--
-- TOC entry 3129 (class 2606 OID 16457)
-- Name: Trades Trainer2ID_FK; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trades"
    ADD CONSTRAINT "Trainer2ID_FK" FOREIGN KEY ("Trainer2ID") REFERENCES public."Users"("UserID") NOT VALID;


-- Completed on 2020-03-17 20:41:43 WET

--
-- PostgreSQL database dump complete
--

