const baseRuta = window.baseRuta || "";


const novelas = [

{
  novela_id: 273,
  titulo: 'Por favor confiésame',
  ingles: 'My Possession Became a Ghost Story',
  original: '请向我告白[重生]',
  slug: "Por_favor_confiésame",
  tags: "bg china finalizado moderno drama malentendidos renacimiento vida-diaria",
  autor: "grumpy-crab",
  link: 'https://drive.google.com/drive/u/1/folders/1ruwFGcN3BLjg8Ej4fuzuVqdn1ajnYVNO',
  capitulos: '60'
},

{
  novela_id: 272,
  titulo: 'Mi posesión se convirtió en una historia de fantasmas',
  ingles: 'My Possession Became a Ghost Story',
  original: '빙의했더니 괴담이 돼 버렸다',
  slug: 'Mi_posesión_se_convirtió_en_una_historia_de_fantasmas',
  tags: 'bg korea en-proceso europa-antigua aristocracia comedia malentendidos multiples-protagonistas sobrenatural terror',
  autor: 'sugar-huru',
  link: 'https://drive.google.com/drive/u/1/folders/1XyXjsRhYTzgfu3VHB30-KznnjV8NCiLG',
  capitulos: '268'
},

{
  novela_id: 271,
  titulo: 'Regas',
  ingles: 'Regas',
  original: '레가스',
  slug: 'Regas',
  tags: 'bl korea pendiente europa-antigua comedia drama lucha-de-poder r18 realeza transmigracion',
  autor: 'nj',
  link: 'https://www.novelupdates.com/series/regas/',
  capitulos: '8 volúmenes'
},

{
  novela_id: 270,
  titulo: 'Condenada a ser carne de cañón',
  ingles: 'Doomed to be Cannon Fodder',
  original: '炮灰女配：纨绔厉王妃',
  slug: 'Condenada_a_ser_carne_de_cañón',
  tags: 'bg china finalizado china-antigua aristocracia drama matrimonio sobrenatural transmigracion',
  autor: 'jia-mian-de-sheng-yan',
  link: 'https://drive.google.com/drive/u/1/folders/1OITynlBwVKjpknkXZPMGMyZrQ4JuweU7',
  capitulos: '295'
},

{
  novela_id: 269,
  titulo: 'Contraataque de la concubina carne de cañón',
  ingles: 'Counterattack of the Cannon Fodder Chambermaid',
  original: '炮灰通房要逆袭',
  slug: 'Contraataque_de_la_concubina_carne_de_cañón',
  tags: 'bg china finalizado china-antigua abuso drama ninos realeza renacimiento',
  autor: 'jia-mian-de-sheng-yan',
  link: 'https://drive.google.com/drive/u/1/folders/1aUb8HJ_sxYbFXZAmetAo3fVD0YMLeFnt',
  capitulos: '177 + 12 extras'
},

{
  novela_id: 268,
  titulo: 'La altiva y feroz consorte',
  ingles: 'The Lofty Fierce Consort',
  original: '悍妃在上',
  slug: 'La_altiva_y_feroz_consorte',
  tags: 'bg china finalizado china-antigua aristocracia drama lucha-de-poder matrimonio ninos punto-de-vista-multiple realeza reencarnacion vida-diaria',
  autor: 'jia-mian-de-sheng-yan',
  link: 'https://drive.google.com/drive/u/1/folders/1V5jJvVUS8i1ZGYQCfgzMFt_6YRNPg1fM',
  capitulos: '181'
},

{
  novela_id: 267,
  titulo: 'Después de que el papel secundario masculino cayera en mis brazos',
  ingles: 'After the Male Supporting Role Fell Into My Arms',
  original: '炮灰倒进我怀里后[快穿]',
  slug: 'Después_de_que_el_papel_secundario_masculino_cayera_en_mis_brazos',
  tags: 'bl china pendiente multiples-mundos amnesia cultivo industria-del-entretenimiento omegaverse realeza sistema transmigracion',
  autor: 'cheng-ling',
  link: 'https://www.novelupdates.com/series/after-the-male-supporting-role-fell-into-my-arms/',
  capitulos: '180'
},

{
  novela_id: 266,
  titulo: 'Después de ser obligado a casarse con un marido feo',
  ingles: 'After Being Forced to Marry an Ugly Husband',
  original: '被迫嫁给丑夫后',
  slug: 'Después_de_ser_obligado_a_casarse_con_un_marido_feo',
  tags: 'bl china pendiente china-antigua amnesia ger mpreg ninos transmigracion',
  autor: 'lin-qin-ren',
  link: 'https://www.novelupdates.com/series/after-being-forced-to-marry-an-ugly-husband/',
  capitulos: '132 + 44 extras'
},

{
  novela_id: 265,
  titulo: 'El granjero Ger en el apocalipsis',
  ingles: 'The Farmer Ger in the Apocalypse',
  original: '乡村小哥儿，异世穿梭',
  slug: 'El_granjero_Ger_en_el_apocalipsis',
  tags: 'bl china pendiente china-antigua agricultura ger mpreg vida-diaria sobrenatural transportado-a-otro-mundo zombies',
  autor: 'tang-li-jian-dan',
  link: 'https://www.novelupdates.com/series/the-farmer-ger-in-the-apocalypse/',
  capitulos: '189 + 26 extras'
},

{
  novela_id: 264,
  titulo: 'El pequeño esposo de Lie Jiu',
  ingles: 'Lie Jiu’s Little Husband',
  original: '恶霸家的小相公',
  slug: 'El_pequeño_esposo_de_Lie_Jiu',
  tags: 'bl china pendiente china-antigua agricultura comedia matrimonio mpreg ninos transmigracion',
  autor: 'lizi-tian-tian',
  link: 'https://www.novelupdates.com/series/lie-jius-little-husband/',
  capitulos: '193'
},

{
  novela_id: 263,
  titulo: 'El renacimiento del Ger loco',
  ingles: 'The Rebirth of Crazy Ger',
  original: '重生之疯哥儿',
  slug: 'El_renacimiento_del_Ger_loco',
  tags: 'bl china pendiente tribal amnesia ger hombre-bestia matrimonio-arreglado mpreg transmigracion',
  autor: 'mao-niao',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-crazy-ger/',
  capitulos: '177 + 1 extra'
},

{
  novela_id: 262,
  titulo: '¿Expulsaste hoy al discípulo del Loto Negro de la secta?',
  ingles: 'Did You Kick the Black Lotus Disciple Out of Sect Today?',
  original: '今天把黑莲花徒弟踢出师门了吗',
  slug: 'Expulsaste_hoy_al_discípulo_del_Loto_Negro_de_la_secta',
  tags: 'bl china pendiente cultivacion cultivo drama maestro-discipulo transmigracion xianxia',
  autor: 'dongbei-da-hui-lang',
  link: 'https://www.novelupdates.com/series/did-you-kick-the-black-lotus-disciple-out-of-sect-today/',
  capitulos: '140 + 4 extras'
},

{
  novela_id: 261,
  titulo: 'Flores en flor, tristeza silenciosa',
  ingles: 'Blooming Flowers, Silent Sorrow',
  original: '花开有时,颓靡无声',
  slug: 'Flores_en_flor,_tristeza_silenciosa',
  tags: 'bl china pendiente china-antigua comedia malentendidos novela-erotica yandere',
  autor: 'shui-qian-cheng',
  link: 'https://www.novelupdates.com/series/blooming-flowers-silent-sorrow/',
  capitulos: '??'
},

{
  novela_id: 260,
  titulo: 'Hay una belleza [Vestimenta antigua moderna]',
  ingles: 'There’s a Beauty [Ancient Wear Modern]',
  original: '有位佳人[古穿今]',
  slug: 'Hay_una_belleza_[Vestimenta_antigua_moderna]',
  tags: 'bl china pendiente moderno comedia malentendidos matrimonio-arreglado vida-diaria transmigracion',
  autor: 'nian-luan',
  link: 'https://www.novelupdates.com/series/theres-a-beauty-ancient-wear-modern/',
  capitulos: '105 + 6 extras'
},

{
  novela_id: 259,
  titulo: 'Hay que gastar el dinero del villano antes de que se declare en bancarrota',
  ingles: 'Must Spend the Villain’s Money Before He Goes Bankrupt',
  original: '必须在反派破产前花光他的钱[穿书]',
  slug: 'Hay_que_gastar_el_dinero_del_villano_antes_de_que_se_declare_en_bancarrota',
  tags: 'bl china pendiente moderno comedia industria-del-entretenimiento malentendidos transmigracion',
  autor: 'cai-ying',
  link: 'https://www.novelupdates.com/series/must-spend-the-villains-money-before-he-goes-bankrupt/',
  capitulos: '162 + 2 extra'
},

{
  novela_id: 258,
  titulo: 'La sirenita embarazada del Mariscal',
  ingles: 'Marshal’s Pregnant Little Mermaid',
  original: '元帅的怀崽崽小人鱼',
  slug: 'La_sirenita_embarazada_del_Mariscal',
  tags: 'bl china pendiente futurista mpreg no-humano sirena transmigracion',
  autor: 'yan-liu-ruo-yun',
  link: 'https://www.novelupdates.com/series/marshals-pregnant-little-mermaid/',
  capitulos: '123 + 11 extras'
},

{
  novela_id: 257,
  titulo: 'Soy un pez salado en tiempos antiguos',
  ingles: 'I Am a Salted Fish in Ancient Times',
  original: '我在古代当咸鱼',
  slug: 'Soy_un_pez_salado_en_tiempos_antiguos',
  tags: 'bl china finalizado china-antigua comedia ger mpreg protagonista-gong realeza transmigracion',
  autor: 'shi-budai-wo',
  link: 'https://drive.google.com/drive/u/1/folders/1Nanw-mKcLakbyE5UGnUfXs6JVD4KIdXA',
  capitulos: '94 + 3 extras'
},

{
  novela_id: 256,
  titulo: 'Transmigrado a un gong despreciable que mima a su marido (Agricultura)',
  ingles: 'Transmigrated Into a Scummy Gong Who Pampers His Husband (Farming)',
  original: '穿成渣攻宠夫郎[种田]',
  slug: 'Transmigrado_a_un_gong_despreciable_que_mima_a_su_marido_(Agricultura)',
  tags: 'bl china pendiente china-antigua mpreg ninos protagonista-gong vida-diaria transmigracion',
  autor: 'chishang-hong-yi',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-scummy-gong-who-pampers-his-husband-farming/',
  capitulos: '97 + 1 extra'
},

{
  novela_id: 255,
  titulo: 'Transmigrar al desierto primitivo como un Gran Dios',
  ingles: 'Transmigrated into the Primitive Wilderness as a Great God',
  original: '穿到蛮荒扮大神',
  slug: 'Transmigrar_al_desierto_primitivo_como_un_Gran_Dios',
  tags: 'bl china pendiente tribal comedia matrimonio-arreglado vida-diaria transmigracion',
  autor: 'da-gou-de-xiao-baozi',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-primitive-wilderness-as-a-great-god/',
  capitulos: '136 + 7 extras'
},

{
  novela_id: 254,
  titulo: 'Transmigrar para convertirse en esposo koi',
  ingles: 'Transmigrated to become a Koi Husband',
  original: '穿成锦鲤小夫郎',
  slug: 'Transmigrar_para_convertirse_en_esposo_koi',
  tags: 'bl china pendiente china-antigua agricultura amnesia bestia-humanizada mpreg no-humano vida-diaria transmigracion',
  autor: 'chi-ling',
  link: 'https://www.novelupdates.com/series/transmigrated-to-become-a-koi-husband/',
  capitulos: '137 + 16 extras'
},

{
  novela_id: 253,
  titulo: 'Registros del despertar de los Zerg canalla',
  ingles: 'Scumbag Zerg Awakening Records',
  original: '虫族之渣虫觉醒笔记',
  slug: 'Registros_del_despertar_de_los_Zerg_canalla',
  tags: 'bl china pendiente futurista protagonista-gong reencarnacion vida-diaria transmigracion',
  autor: 'wo-suan-shenme-xiao-binggan',
  link: 'https://www.novelupdates.com/series/scumbag-zerg-awakening-records/',
  capitulos: '127'
},

{
  novela_id: 252,
  titulo: 'Ger, tan orgulloso',
  ingles: 'Ger, So Proud',
  original: '哥儿如此多骄',
  slug: 'Ger,_tan_orgulloso',
  tags: 'bl china pendiente china-antigua agricultura mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'jin-futu',
  link: 'https://www.novelupdates.com/series/ger-so-proud/',
  capitulos: '117 + 2 extras'
},

{
  novela_id: 251,
  titulo: 'Es difícil que un personaje villano no colapse',
  ingles: 'It’s Hard for a Villain Character Not to Collapse',
  original: '反派人設很難不崩啊',
  slug: 'Es_difícil_que_un_personaje_villano_no_colapse',
  tags: 'bl china pendiente cultivacion cultivo hibrido malentendidos sistema transmigracion xuanhuan',
  autor: 'yun-feixie',
  link: 'https://www.novelupdates.com/series/its-hard-for-a-villain-character-not-to-collapse/',
  capitulos: '176 + 2 extras'
},

{
  novela_id: 250,
  titulo: 'Mi novio tartamudo',
  ingles: 'My Stuttering Boyfriend',
  original: '大结巴',
  slug: 'Mi_novio_tartamudo',
  tags: 'bl china pendiente moderno drama vida-diaria novela-erotica',
  autor: 'duhai-bushi-yisheng',
  link: 'https://www.novelupdates.com/series/my-stuttering-boyfriend/',
  capitulos: '18'
},

{
  novela_id: 249,
  titulo: 'Estrategia del villano',
  ingles: 'Villain’s Strategy',
  original: '反派攻略',
  slug: 'Estrategia_del_villano',
  tags: 'bl china finalizado moderno comedia malentendidos vida-escolar sistema transmigracion',
  autor: 'luobo-hua-tuzi',
  link: 'https://drive.google.com/drive/u/1/folders/1FbtjORwkAsT5_Qo6Y5i4N04IhTHWI8-1',
  capitulos: '96 + 2 extra'
},

{
  novela_id: 248,
  titulo: 'El rectificador profesional de tres perspectivas [Transmigración]',
  ingles: 'The Professional Three Views Rectifier [Book Transmigration]',
  original: '专业三观矫正员[穿书]',
  slug: 'El_rectificador_profesional_de_tres_perspectivas_[Transmigración]',
  tags: 'bl china pendiente moderno drama sistema transmigracion',
  autor: 'sang-wo',
  link: 'https://www.novelupdates.com/series/the-professional-three-views-rectifier-book-transmigration/',
  capitulos: '69 + 4 extras'
},

{
  novela_id: 247,
  titulo: 'Toma su mano',
  ingles: 'Hold His Hand',
  original: '快穿之执手',
  slug: 'Toma_su_mano',
  tags: 'bl china pendiente multiples-mundos cultivo protagonista-gong transmigracion zombies',
  autor: 'jue-jue',
  link: 'https://www.novelupdates.com/series/hold-his-hand/',
  capitulos: '292'
},

{
  novela_id: 246,
  titulo: 'Tengo un Halo de "Sistema"',
  ingles: 'I Have a "System" Halo',
  original: '我有一枚“系统”光环[快穿]',
  slug: 'Tengo_un_Halo_de_Sistema',
  tags: 'bl china pendiente multiples-mundos amnesia comedia sistema transmigracion',
  autor: 'qian-mo-li-shang',
  link: 'https://www.novelupdates.com/series/i-have-a-system-halo/',
  capitulos: '293 + 14 extras'
},

{
  novela_id: 245,
  titulo: 'Una ola de ex vino a buscarme. ¡¿Qué hacer?!',
  ingles: 'A Wave of Exes Came Looking for Me. What to Do?!',
  original: '前男友組團來襲怎麼破！',
  slug: 'Una_ola_de_ex_vino_a_buscarme._Qué_hacer',
  tags: 'bl china pendiente multiples-mundos comedia sistema novela-erotica transmigracion yandere',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/a-wave-of-exes-came-looking-for-me-what-to-do/',
  capitulos: '64'
},

{
  novela_id: 244,
  titulo: 'Ser un rompecorazones en una película de terror',
  ingles: 'To Be a Heartthrob in a Horror Movie',
  original: '在恐怖片里当万人迷[快穿]',
  slug: 'Ser_un_rompecorazones_en_una_película_de_terror',
  tags: 'bl china pendiente multiples-mundos amnesia sobrenatural terror',
  autor: 'jiang-zhi-yu',
  link: 'https://www.novelupdates.com/series/to-be-a-heartthrob-in-a-horror-movie/',
  capitulos: '156'
},

{
  novela_id: 243,
  titulo: '¿Planeas matarme con Meng?',
  ingles: 'You Plan To Kill Me With Meng?',
  original: '你打算萌死我吗[快穿]',
  slug: 'Planeas_matarme_con_Meng',
  tags: 'bl china en-proceso multiples-mundos animales no-humano transmigracion',
  autor: 'moru-gui',
  link: 'https://drive.google.com/drive/u/4/folders/1tJyZvYH_yluvC8HP_trZx2bg8mcSxjqn',
  capitulos: '346'
},

{
  novela_id: 242,
  titulo: 'Paquete adorable',
  ingles: 'Lovable Package',
  original: '娇气包[快穿]',
  slug: 'Paquete_adorable',
  tags: 'bl china pendiente multiples-mundos amnesia cultivo sistema transmigracion',
  autor: 'qiu-shi-sha',
  link: 'https://www.novelupdates.com/series/lovable-package/',
  capitulos: '123'
},

{
  novela_id: 241,
  titulo: 'Nunca imaginé que Long Aotian se convertiría en mi esposa [Transmigración rápida]',
  ingles: 'I Never Imagined Long Aotian Would Become My Wife [Quick Transmigration]',
  original: '我真没想让龙傲天当我老婆[快穿]',
  slug: 'Nunca_imaginé_que_Long_Aotian_se_convertiría_en_mi_esposa_[Transmigración_rápida]',
  tags: 'bl china finalizado multiples-mundos amnesia cultivo no-humano omegaverse protagonista-gong sistema transmigracion zombies',
  autor: 'zhen-zhong-mian',
  link: 'https://drive.google.com/drive/u/1/folders/1bL4hP9KO4mcFZtp2qL2zF8AfTfuUz8f_',
  capitulos: '145 + 15 extras'
},

{
  novela_id: 240,
  titulo: 'No recojas novios del basurero',
  ingles: 'Don’t Pick Up Boyfriends From the Trash Bin',
  original: '不要在垃圾桶里捡男朋友[快穿]',
  slug: 'No_recojas_novios_del_basurero',
  tags: 'bl china pendiente multiples-mundos sistema tragedia transmigracion',
  autor: 'qi-jing-nan-qu',
  link: 'https://www.novelupdates.com/series/dont-pick-up-boyfriends-from-the-trash-bin/',
  capitulos: '270 + 13 extras'
},

{
  novela_id: 239,
  titulo: 'No esperes a tu novio en el crematorio',
  ingles: 'Don’t Wait for Your Boyfriend in the Crematorium',
  original: '不要在火葬场里等男朋友',
  slug: 'No_esperes_a_tu_novio_en_el_crematorio',
  tags: 'bl china pendiente multiples-mundos amnesia comedia omegaverse protagonista-gong sistema transmigracion',
  autor: 'ke-zhou-qiu-ou',
  link: 'https://www.novelupdates.com/series/dont-wait-for-your-boyfriend-in-the-crematorium/',
  capitulos: '115'
},

{
  novela_id: 238,
  titulo: 'Mis pacientes se enamoran de mí',
  ingles: 'My Patients Fall in Love with Me',
  original: '我的病人都爱上我',
  slug: 'Mis_pacientes_se_enamoran_de_mí',
  tags: 'bl china pendiente multiples-mundos sistema novela-erotica transmigracion yandere',
  autor: 'xiu-sheng',
  link: 'https://www.novelupdates.com/series/my-patients-fall-in-love-with-me/',
  capitulos: '123'
},

{
  novela_id: 237,
  titulo: 'Me hice fanboy del villano',
  ingles: 'I Became a Fanboy of the Villain',
  original: '我成了反派脑残粉[快穿]',
  slug: 'Me_hice_fanboy_del_villano',
  tags: 'bl china pendiente multiples-mundos comedia cultivo malentendidos sistema transmigracion',
  autor: 'buzhao-yi-zi',
  link: 'https://www.novelupdates.com/series/i-became-a-fanboy-of-the-villain/',
  capitulos: '80'
},

{
  novela_id: 236,
  titulo: 'Los Mariscales quieren divorciarse',
  ingles: 'The Marshals Want to Get Divorced',
  original: '元帅们同时闹离婚',
  slug: 'Los_Mariscales_quieren_divorciarse',
  tags: 'bl china pendiente multiples-mundos comedia cultivo sobrenatural transmigracion yandere',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/the-marshals-want-to-get-divorced/',
  capitulos: '114'
},

{
  novela_id: 235,
  titulo: 'La estrategia de lavar y limpiar una escoria Shou',
  ingles: 'The Strategy of Washing Clean a Slag Shou',
  original: '渣受洗白攻略',
  slug: 'La_estrategia_de_lavar_y_limpiar_una_escoria_Shou',
  tags: 'bl china pendiente multiples-mundos amnesia sistema transmigracion zombies',
  autor: 'ying-amu',
  link: 'https://www.novelupdates.com/series/the-strategy-of-washing-clean-a-slag-shou/',
  capitulos: '147'
},

{
  novela_id: 234,
  titulo: 'La carne de cañón es el rey [Transmigración rápida]',
  ingles: 'Cannon Fodder Is King [Quick Transmigration]',
  original: '炮灰为王[快穿]',
  slug: 'La_carne_de_cañón_es_el_rey_[Transmigración_rápida]',
  tags: 'bl china en-proceso multiples-mundos protagonista-gong protagonista-op sistema transmigracion venganza',
  autor: 'jia-zi-hai',
  link: 'https://drive.google.com/drive/u/4/folders/1aOjpnqUUGYQ0rRGcDEtBJa8iqq55s1k6',
  capitulos: '208'
},

{
  novela_id: 233,
  titulo: 'Yo cubro las espaldas de esta carne de cañón',
  ingles: 'I’ve Got this Cannon Fodder’s Back',
  original: '这个炮灰我罩了！[快穿]',
  slug: 'Yo_cubro_las_espaldas_de_esta_carne_de_cañón',
  tags: 'bl china pendiente multiples-mundos comedia sistema vida-diaria transmigracion',
  autor: 'sanqian-da-meng-xu-pingsheng',
  link: 'https://www.novelupdates.com/series/ive-got-this-cannon-fodders-back/',
  capitulos: '152'
},

{
  novela_id: 232,
  titulo: 'Experimentar un final feliz con la escoria Shou',
  ingles: 'Experiencing a Happy Ending With a Scum Shou',
  original: '和渣受HE是什么体验',
  slug: 'Experimentar_un_final_feliz_con_la_escoria_Shou',
  tags: 'bl china pendiente multiples-mundos protagonista-gong novela-erotica transmigracion yandere',
  autor: 'moru-gui',
  link: 'https://www.novelupdates.com/series/experiencing-a-happy-ending-with-a-scum-shou/',
  capitulos: '114 + 1 extra'
},

{
  novela_id: 231,
  titulo: 'Estrategia para capturar esa escoria Gong',
  ingles: 'Strategy to Capture that Scum Gong',
  original: '攻略那个渣攻[快穿]',
  slug: 'Estrategia_para_capturar_esa_escoria_Gong',
  tags: 'bl china pendiente multiples-mundos malentendidos sistema tragedia venganza yandere',
  autor: 'jimo-yao',
  link: 'https://www.novelupdates.com/series/strategy-to-capture-that-scum-gong/',
  capitulos: '211'
},

{
  novela_id: 230,
  titulo: 'Esta experiencia de transmigración rápida es un poco dulce',
  ingles: 'This Quick Transmigration Experience Is a Bit Sweet',
  original: '这个快穿有点甜',
  slug: 'Esta_experiencia_de_transmigración_rápida_es_un_poco_dulce',
  tags: 'bl china pendiente multiples-mundos amnesia comedia no-humano sistema transmigracion yandere',
  autor: 'chang-nian-jun',
  link: 'https://www.novelupdates.com/series/this-quick-transmigration-experience-is-a-bit-sweet/',
  capitulos: '133 + extras'
},

{
  novela_id: 229,
  titulo: 'Enciende el sistema del amor',
  ingles: 'Turn on the Love System',
  original: '开挂恋爱系统（快穿）',
  slug: 'Enciende_el_sistema_del_amor',
  tags: 'bl china pendiente multiples-mundos drama mpreg sistema transmigracion',
  autor: 'juzi-zhou',
  link: 'https://www.novelupdates.com/series/turn-on-the-love-system/',
  capitulos: '188 + 2 extras'
},

{
  novela_id: 228,
  titulo: 'En realidad, no es fácil ser un protagonista masculino secundario',
  ingles: 'It’s Actually Not Easy Wanting to be a Supporting Male Lead',
  original: '想做男配其实也不容易',
  slug: 'En_realidad,_no_es_fácil_ser_un_protagonista_masculino_secundario',
  tags: 'bl china pendiente multiples-mundos cultivo malentendidos no-humano realeza novela-erotica tragedia transmigracion zombies',
  autor: 'mijia',
  link: 'https://www.novelupdates.com/series/its-actually-not-easy-wanting-to-be-a-supporting-male-lead/',
  capitulos: '200 + 5 extras'
},

{
  novela_id: 227,
  titulo: 'El villano cargó mi sistema',
  ingles: 'The Villain Loaded My System',
  original: '反派加载了我的系统[快穿]',
  slug: 'El_villano_cargó_mi_sistema',
  tags: 'bl china finalizado multiples-mundos amnesia comedia sistema transmigracion venganza yandere',
  autor: 'you-hu-qiansui',
  link: 'https://drive.google.com/drive/u/4/folders/1qs-c5MPxZkbmWf1I7wAh72_N-_amVVqb',
  capitulos: '112'
},

{
  novela_id: 226,
  titulo: '¡El té verde siempre apunta a la persona equivocada!',
  ingles: 'The Green Tea is Always Targeting the Wrong Person!',
  original: '绿茶的对象总是不对啊[快穿]',
  slug: 'El_té_verde_siempre_apunta_a_la_persona_equivocada',
  tags: 'bl china pendiente multiples-mundos no-humano omegaverse sistema transmigracion venganza zombies',
  autor: 'jieke-maomi',
  link: 'https://www.novelupdates.com/series/the-green-tea-is-always-targeting-the-wrong-person/',
  capitulos: '91'
},

{
  novela_id: 225,
  titulo: 'El protagonista sólo piensa en enamorarse',
  ingles: 'The Protagonist Only Thinks About Falling In Love',
  original: '主角只想谈恋爱',
  slug: 'El_protagonista_sólo_piensa_en_enamorarse',
  tags: 'bl china pendiente multiples-mundos cultivo multiples-protagonistas no-humano protagonista-gong sistema sobrenatural zombies',
  autor: 'zhu-ge-tian-zong',
  link: 'https://www.novelupdates.com/series/the-protagonist-only-thinks-about-falling-in-love/',
  capitulos: '237 + 2 extras'
},

{
  novela_id: 224,
  titulo: 'El plan de contraataque de un villano con diez mil fans',
  ingles: 'The Counterattack Plan of A Villain With Ten Thousand Fans',
  original: '万人迷反派逆袭计划',
  slug: 'El_plan_de_contraataque_de_un_villano_con_diez_mil_fans',
  tags: 'bl china pendiente multiples-mundos canibalismo comedia cultivo omegaverse sistema yandere zombies',
  autor: 'conglai-bu-wen',
  link: 'https://www.novelupdates.com/series/the-counterattack-plan-of-a-villain-with-ten-thousand-fans/',
  capitulos: '335 + 14 extras'
},

{
  novela_id: 223,
  titulo: '¡El objetivo siempre piensa que me gusta!',
  ingles: 'The Target Always Thinks That I Like Him!',
  original: '目标总以为我喜欢他[快穿]',
  slug: 'El_objetivo_siempre_piensa_que_me_gusta',
  tags: 'bl china pendiente multiples-mundos comedia cultivo malentendidos sistema zombies',
  autor: 'zhuo-ran',
  link: 'https://www.novelupdates.com/series/the-target-always-thinks-that-i-like-him/',
  capitulos: '168 + 15 extras'
},

{
  novela_id: 222,
  titulo: 'El destino perfecto',
  ingles: 'The Perfect Destiny',
  original: '快穿之完美命运',
  slug: 'El_destino_perfecto',
  tags: 'bl china pendiente multiples-mundos comedia omegaverse sistema novela-erotica tragedia transmigracion yandere zombies',
  autor: 'xi-zixu',
  link: 'https://www.novelupdates.com/series/the-perfect-destiny/',
  capitulos: '157'
},

{
  novela_id: 221,
  titulo: 'Cómo morir tan pesado como el monte Tai',
  ingles: 'How To Die As Heavy As Mount Tai',
  original: '如何死得重于泰山[快穿]',
  slug: 'Cómo_morir_tan_pesado_como_el_monte_Tai',
  tags: 'bl china pendiente multiples-mundos amnesia cultivo omegaverse sistema sobrenatural tragedia transmigracion zombies',
  autor: 'mao-ba-xiansheng',
  link: 'https://www.novelupdates.com/series/how-to-die-as-heavy-as-mount-tai/',
  capitulos: '194'
},

{
  novela_id: 220,
  titulo: 'Cómo enamorarse del villano',
  ingles: 'How to Fall in Love with the Villain',
  original: '如何与反派谈恋爱',
  slug: 'Cómo_enamorarse_del_villano',
  tags: 'bl china pendiente multiples-mundos hombre-bestia mpreg multiples-protagonistas transmigracion',
  autor: 'han-zhang-bu-luo',
  link: 'https://www.novelupdates.com/series/how-to-fall-in-love-with-the-villain/',
  capitulos: '84'
},

{
  novela_id: 219,
  titulo: 'Como el personaje rival gay en las novelas BG',
  ingles: 'As the Minor Gay Rival in Het Novels',
  original: 'BG文里的基佬男配[快穿]',
  slug: 'Como_el_personaje_rival_gay_en_las_novelas_BG',
  tags: 'bl china pendiente multiples-mundos amnesia cultivo drama omegaverse sistema transmigracion yandere zombies',
  autor: 'ying-amu',
  link: 'https://www.novelupdates.com/series/as-the-minor-gay-rival-in-het-novels/',
  capitulos: '106 + 11 extras'
},

{
  novela_id: 218,
  titulo: 'BOSS transmigra como una pequeña monada',
  ingles: 'BOSS Transmigrates as a Little Cutie',
  original: 'BOSS穿成小可爱[快穿]',
  slug: 'BOSS_transmigra_como_una_pequeña_monada',
  tags: 'bl china finalizado multiples-mundos cultivo drama omegaverse protagonista-op transmigracion venganza',
  autor: 'guangming-zai-an',
  link: 'https://drive.google.com/drive/u/1/folders/1CRNyLbc2pZUHG8Fj-hWszXmG_4nvXm6l',
  capitulos: '154 + 5 extras'
},

{
  novela_id: 217,
  titulo: 'Aquellos años en que matamos al loto blanco',
  ingles: 'Those Years When We Killed the White Lotus',
  original: '那些年我们弄死的白莲花',
  slug: 'Aquellos_años_en_que_matamos_al_loto_blanco',
  tags: 'bl china pendiente multiples-mundos cultivo inteligencia-artificial omegaverse sistema transmigracion yandere zombies',
  autor: 'mo-shuo-sheng-gui',
  link: 'https://www.novelupdates.com/series/those-years-when-we-killed-the-white-lotus/',
  capitulos: '149'
},

{
  novela_id: 216,
  titulo: 'Accidentalmente ataqué a un gran demonio',
  ingles: 'Accidentally Attacked a Great Demon King',
  original: '一不小心攻了个大魔王[快穿]',
  slug: 'Accidentalmente_ataqué_a_un_gran_demonio',
  tags: 'bl china pendiente multiples-mundos cultivo drama protagonista-gong sobrenatural',
  autor: 'tianxia-tian',
  link: 'https://www.novelupdates.com/series/accidentally-attacked-a-great-demon-king/',
  capitulos: '122 + 4 extras'
},

{
  novela_id: 215,
  titulo: 'Transmigrar en el amigo de la infancia carne de cañón del rompecorazones',
  ingles: 'Transmigrating Into The Heartthrob’s Cannon Fodder Childhood Friend',
  original: '穿成万人迷的炮灰竹马',
  slug: 'Transmigrar_en_el_amigo_de_la_infancia_carne_de_cañón_del_rompecorazones',
  tags: 'bl china pendiente moderno comedia vida-escolar sistema transmigracion',
  autor: 'qie-zai-shan-yang',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-heartthrobs-cannon-fodder-childhood-friend/',
  capitulos: '105 + 1 extra'
},

{
  novela_id: 214,
  titulo: 'Transmigrar al exnovio del protagonista masculino renacido',
  ingles: 'Transmigrating into the Reborn Male Lead’s Ex-Boyfriend',
  original: '穿成重生男主前男友',
  slug: 'Transmigrar_al_exnovio_del_protagonista_masculino_renacido',
  tags: 'bl china pendiente moderno drama malentendidos renacimiento sistema transmigracion',
  autor: 'wen-yukuan',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-reborn-male-leads-ex-boyfriend/',
  capitulos: '155 + 3 extras'
},

{
  novela_id: 213,
  titulo: 'Transmigrado en carne de cañón de un pez gordo, la pequeña esposa mimada',
  ingles: 'Transmigrated into A Big Shot’s Cannon Fodder Little Pampered Wife',
  original: '穿成大佬的炮灰联姻小娇妻',
  slug: 'Transmigrado_en_carne_de_cañón_de_un_pez_gordo,_la_pequeña_esposa_mimada',
  tags: 'bl china pendiente moderno ger matrimonio mpreg sistema transmigracion',
  autor: 'gongzi-xun-huan',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-big-shots-cannon-fodder-little-pampered-wife/',
  capitulos: '169 + 5 extras'
},

{
  novela_id: 212,
  titulo: 'Transmigrado como el ex del villano ciego',
  ingles: 'Transmigrated As the Ex of the Blind Villain',
  original: '穿成盲人反派的前任',
  slug: 'Transmigrado_como_el_ex_del_villano_ciego',
  tags: 'bl china pendiente moderno discapacidad matrimonio-arreglado vida-diaria transmigracion',
  autor: 'caolu',
  link: 'https://www.novelupdates.com/series/transmigrated-as-the-ex-of-the-blind-villain/',
  capitulos: '96'
},

{
  novela_id: 211,
  titulo: 'Transmigrado al prometido del emperador del cine que busca la muerte',
  ingles: 'Transmigrated into the Film Emperor’s Death-Seeking Fiance',
  original: '穿成影帝作死未婚夫[穿书]',
  slug: 'Transmigrado_al_prometido_del_emperador_del_cine_que_busca_la_muerte',
  tags: 'bl china pendiente moderno industria-del-entretenimiento matrimonio-arreglado mpreg ninos vida-diaria transmigracion',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-film-emperors-death-seeking-fiance/',
  capitulos: '191 + 98 extras'
},

{
  novela_id: 210,
  titulo: 'Transmigrado a un ídolo escolar y obligado a hacer negocios',
  ingles: 'Transmigrated into a School Idol and Forced to Do Business',
  original: '穿成校草被迫营业',
  slug: 'Transmigrado_a_un_ídolo_escolar_y_obligado_a_hacer_negocios',
  tags: 'bl china pendiente moderno comedia malentendidos vida-escolar sistema transmigracion venganza',
  autor: 'yu-wu-xiao-tian-bing',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-school-idol-and-forced-to-do-business/',
  capitulos: '61 + 1 extra'
},

{
  novela_id: 209,
  titulo: 'Señor Dior',
  ingles: 'Mr. Dior',
  original: '迪奥先生',
  slug: 'Señor_Dior',
  tags: 'bl china pendiente moderno amnesia comedia matrimonio',
  autor: 'lu-ye-qian-he',
  link: 'https://www.novelupdates.com/series/mr-dior/',
  capitulos: '100 + 8 extras'
},

{
  novela_id: 208,
  titulo: 'Segundo amor',
  ingles: 'Second Love',
  original: '二次热恋',
  slug: 'Segundo_amor',
  tags: 'bl china finalizado moderno discapacidad matrimonio vida-diaria novela-erotica',
  autor: 'zhi-zhi',
  link: 'https://drive.google.com/drive/u/1/folders/1epX0Mgq777gFnNeiesZk-MlQrZ3Pd1mw',
  capitulos: '11 + 5 extras'
},

{
  novela_id: 207,
  titulo: 'Se casó con el hermano villano de la escoria Gong',
  ingles: 'Married the Scum Gong’s Villain Brother',
  original: '嫁给渣攻的反派哥哥',
  slug: 'Se_casó_con_el_hermano_villano_de_la_escoria_Gong',
  tags: 'bl china pendiente moderno matrimonio-arreglado vida-diaria transmigracion',
  autor: 'guan-hongyi',
  link: 'https://www.novelupdates.com/series/married-the-scum-gongs-villain-brother/',
  capitulos: '84 + 9 extras'
},

{
  novela_id: 206,
  titulo: 'Romance floreciente',
  ingles: 'Blooming Romance',
  original: '桃花汛',
  slug: 'Romance_floreciente',
  tags: 'bl china pendiente moderno malentendidos mpreg vida-diaria',
  autor: 'han-shu',
  link: 'https://www.novelupdates.com/series/blooming-romance/',
  capitulos: '111 + 15 extras'
},

{
  novela_id: 205,
  titulo: 'Rey de la música clásica',
  ingles: 'King of Classical Music',
  original: '古典音乐之王[重生]',
  slug: 'Rey_de_la_música_clásica',
  tags: 'bl china pendiente moderno r18 vida-diaria transmigracion venganza',
  autor: 'mo-chen-huan',
  link: 'https://www.novelupdates.com/series/king-of-classical-music/',
  capitulos: '290 + 22 extras'
},

{
  novela_id: 204,
  titulo: 'Renacimiento: Un camino diferente',
  ingles: 'Rebirth: Different Way',
  original: '(重生) 殊途',
  slug: 'Renacimiento_Un_camino_diferente',
  tags: 'bl china pendiente moderno drama renacimiento novela-erotica venganza',
  autor: 'li-song-ru',
  link: 'https://www.novelupdates.com/series/rebirth-different-way/',
  capitulos: '101'
},

{
  novela_id: 203,
  titulo: 'Renacimiento y redención',
  ingles: 'Rebirth and Redemption',
  original: '重生自赎[主攻]',
  slug: 'Renacimiento_y_redención',
  tags: 'bl china pendiente moderno protagonista-gong renacimiento vida-escolar',
  autor: 'yi-ting-mo-tong',
  link: 'https://www.novelupdates.com/series/rebirth-and-redemption/',
  capitulos: '128 + 15 extras'
},

{
  novela_id: 202,
  titulo: 'Renacimiento para convertirse en la esposa Omega del presidente',
  ingles: 'Rebirth to Become the President’s Omega Wife',
  original: '重生豪门总裁的O妻',
  slug: 'Renacimiento_para_convertirse_en_la_esposa_Omega_del_presidente',
  tags: 'bl china pendiente moderno matrimonio mpreg omegaverse transmigracion',
  autor: 'hanmen-yatou',
  link: 'https://www.novelupdates.com/series/rebirth-to-become-the-presidents-omega-wife/',
  capitulos: '87'
},

{
  novela_id: 201,
  titulo: 'Renacido como el gato y el perro del presidente villano',
  ingles: 'Reborn as the Villain President’s Cat & Dog',
  original: '重生成反派总裁的猫狗[娱乐圈]',
  slug: 'Renacido_como_el_gato_y_el_perro_del_presidente_villano',
  tags: 'bl china pendiente moderno industria-del-entretenimiento mascotas matrimonio renacimiento transformacion-animal',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/reborn-as-the-villain-presidents-cat-dog/',
  capitulos: '111 + 10 extras'
},

{
  novela_id: 200,
  titulo: 'Renacer sólo para amarte de nuevo',
  ingles: 'Reborn Only to Love You Again',
  original: '重生只为再爱你一次',
  slug: 'Renacer_sólo_para_amarte_de_nuevo',
  tags: 'bl china pendiente moderno drama matrimonio renacimiento',
  autor: 'yige-xiao-ping-gai',
  link: 'https://www.novelupdates.com/series/reborn-only-to-love-you-again/',
  capitulos: '76'
},

{
  novela_id: 199,
  titulo: 'Renacer con un viejo enemigo el día de nuestro matrimonio',
  ingles: 'Reborn with an Old Enemy on the Day of our Marriage',
  original: '和宿敌结婚当天一起重生了',
  slug: 'Renacer_con_un_viejo_enemigo_el_día_de_nuestro_matrimonio',
  tags: 'bl china pendiente moderno comedia matrimonio renacimiento vida-escolar',
  autor: 'lin-zhiluo',
  link: 'https://www.novelupdates.com/series/reborn-with-an-old-enemy-on-the-day-of-our-marriage/',
  capitulos: '93 + 11 extras'
},

{
  novela_id: 198,
  titulo: 'Protagonista masculino 2 y Protagonista masculino 3 ¡Final feliz!',
  ingles: 'Male Lead 2 and Male Lead 3 Happy Ending!',
  original: '男二和男三HE了！',
  slug: 'Protagonista_masculino_2_y_Protagonista_masculino_3_Final_feliz',
  tags: 'bl china pendiente moderno malentendidos matrimonio vida-diaria transmigracion',
  autor: 'feng-jiu',
  link: 'https://www.novelupdates.com/series/male-lead-2-and-male-lead-3-happy-ending/',
  capitulos: '64 + 9 extras'
},

{
  novela_id: 197,
  titulo: 'Préstame atención',
  ingles: 'Pay Attention to Me',
  original: '理我一下',
  slug: 'Préstame_atención',
  tags: 'bl china pendiente moderno comedia matrimonio omegaverse protagonista-gong vida-escolar novela-erotica',
  autor: 'bing-kuai-er',
  link: 'https://www.novelupdates.com/series/pay-attention-to-me/',
  capitulos: '113 + 4 extras'
},

{
  novela_id: 196,
  titulo: '¡No quiero que seas responsable!',
  ingles: 'I Don’t Want You To Be Responsible!',
  original: '老子不要你负责!',
  slug: 'No_quiero_que_seas_responsable',
  tags: 'bl china pendiente moderno comedia matrimonio mpreg renacimiento vida-diaria',
  autor: 'bei-tang-mo',
  link: 'https://www.novelupdates.com/series/i-dont-want-you-to-be-responsible/',
  capitulos: '204 + 9 extras'
},

{
  novela_id: 195,
  titulo: 'No es fácil ser el hermano mayor de tu rival en el amor',
  ingles: 'It’s Not Easy Being Your Love Rival’s Big Brother',
  original: '情敌他哥不好当',
  slug: 'No_es_fácil_ser_el_hermano_mayor_de_tu_rival_en_el_amor',
  tags: 'bl china pendiente moderno comedia matrimonio renacimiento novela-erotica',
  autor: 'jing-feng-youzhi-cha',
  link: 'https://www.novelupdates.com/series/its-not-easy-being-your-love-rivals-big-brother/',
  capitulos: '58 + 2 extras'
},

{
  novela_id: 194,
  titulo: 'Mis cinco elementos te faltan',
  ingles: 'My Five Elements Lack You',
  original: '我五行缺你',
  slug: 'Mis_cinco_elementos_te_faltan',
  tags: 'bl china pendiente moderno discapacidad matrimonio sobrenatural terror transmigracion',
  autor: 'xi-zixu',
  link: 'https://www.novelupdates.com/series/my-five-elements-lack-you/',
  capitulos: '106 + 7 extras'
},

{
  novela_id: 193,
  titulo: 'Mi viejo gong tiene amnesia',
  ingles: 'My Old Gong Has Amnesia',
  original: '我家老宫失忆了[娱乐圈]',
  slug: 'Mi_viejo_gong_tiene_amnesia',
  tags: 'bl china pendiente moderno amnesia comedia industria-del-entretenimiento matrimonio no-humano vida-diaria',
  autor: 'su-jingxian',
  link: 'https://www.novelupdates.com/series/my-old-gong-has-amnesia/',
  capitulos: '130'
},

{
  novela_id: 192,
  titulo: 'Mi expresión exterior es diferente de mi expresión interior',
  ingles: 'My Outside Expression Is Different From My Inner Expression',
  original: '我表里不一在线翻车[穿书]',
  slug: 'Mi_expresión_exterior_es_diferente_de_mi_expresión_interior',
  tags: 'bl china finalizado moderno comedia discapacidad matrimonio sistema transmigracion',
  autor: 'gong-qing-han',
  link: 'https://drive.google.com/drive/u/1/folders/1Oeda_uXkS1p9mrrbWoTY_d_8SKHNUtvC',
  capitulos: '113'
},

{
  novela_id: 191,
  titulo: 'Mi esposo sufre de una enfermedad terminal',
  ingles: 'My Husband is Suffering from a Terminal Illness',
  original: '老攻身患绝症[穿书]',
  slug: 'Mi_esposo_sufre_de_una_enfermedad_terminal',
  tags: 'bl china pendiente moderno discapacidad industria-del-entretenimiento matrimonio matrimonio-arreglado sistema transmigracion',
  autor: 'bu-hui-xia-qi',
  link: 'https://www.novelupdates.com/series/my-husband-is-suffering-from-a-terminal-illness/',
  capitulos: '171 + 4 extras'
},

{
  novela_id: 190,
  titulo: 'Mi esposa es heterosexual',
  ingles: 'My Wife is Straight',
  original: '我的老婆是直男',
  slug: 'Mi_esposa_es_heterosexual',
  tags: 'bl china finalizado moderno comedia matrimonio oneshot protagonista-gong',
  autor: 'dongfeng-jixu',
  link: 'https://drive.google.com/drive/u/1/folders/1mNxnAKR9x8GkA1aVH88uWwvWPxEohgCN',
  capitulos: '2'
},

{
  novela_id: 189,
  titulo: 'Mi amigo de la infancia sigue intentando convertirme en gay',
  ingles: 'My Childhood Buddy Keeps Trying To Turn Me Gay',
  original: '发小总想掰弯我',
  slug: 'Mi_amigo_de_la_infancia_sigue_intentando_convertirme_en_gay',
  tags: 'bl china pendiente moderno matrimonio vida-diaria',
  autor: 'jiao-hua-qing-jiu',
  link: 'https://www.novelupdates.com/series/my-childhood-buddy-keeps-trying-to-turn-me-gay/',
  capitulos: '5 + 1 extra'
},

{
  novela_id: 188,
  titulo: 'Me mordieron después de transmigrar a una pseudo-beta',
  ingles: 'I Got Bitten After Transmigrating into a Pseudo-Beta',
  original: '穿成伪beta后被咬了［穿书］',
  slug: 'Me_mordieron_después_de_transmigrar_a_una_pseudo-beta',
  tags: 'bl china pendiente moderno matrimonio matrimonio-arreglado mpreg omegaverse transmigracion',
  autor: 'lu-wei-mu',
  link: 'https://www.novelupdates.com/series/i-got-bitten-after-transmigrating-into-a-pseudo-beta/',
  capitulos: '71 + 4 extras'
},

{
  novela_id: 187,
  titulo: 'Me escapé después de que ese viejo rico quedara embarazado de mi hijo',
  ingles: 'I Ran Away after that Rich Old Man was Pregnant with My Child',
  original: '豪门老男人怀了我的孩子后我跑了',
  slug: 'Me_escapé_después_de_que_ese_viejo_rico_quedara_embarazado_de_mi_hijo',
  tags: 'bl china pendiente moderno comedia mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'yun-zhi',
  link: 'https://www.novelupdates.com/series/i-ran-away-after-that-rich-old-man-was-pregnant-with-my-child/',
  capitulos: '93'
},

{
  novela_id: 186,
  titulo: 'Los grandes jefes no son lo que esperaba después de transmigrar a un libro',
  ingles: 'The Big Bosses Are Not What I Expected After I Transmigrated Into A Book',
  original: '穿书后大佬们倒戈了',
  slug: 'Los_grandes_jefes_no_son_lo_que_esperaba_después_de_transmigrar_a_un_libro',
  tags: 'bl china pendiente moderno comedia drama malentendidos transmigracion',
  autor: 'zhu-tang',
  link: 'https://www.novelupdates.com/series/the-big-bosses-are-not-what-i-expected-after-i-transmigrated-into-a-book/',
  capitulos: '95 + 8 extras'
},

{
  novela_id: 185,
  titulo: 'Juego de seducción',
  ingles: 'Seduction Game',
  original: '试图勾引',
  slug: 'Juego_de_seducción',
  tags: 'bl china finalizado moderno malentendidos novela-erotica',
  autor: 'shi-jiu-chi-cha',
  link: 'https://drive.google.com/drive/u/1/folders/1puCxatkYvNDMNuxvgVSJ2mOd6LlQh-4L',
  capitulos: '4'
},

{
  novela_id: 184,
  titulo: 'Hielo de frijol rojo',
  ingles: 'Red Bean Ice',
  original: '红豆牛奶冰',
  slug: 'Hielo_de_frijol_rojo',
  tags: 'bl china finalizado moderno comedia industria-del-entretenimiento matrimonio vida-diaria novela-erotica',
  autor: 'yige-mi-bing',
  link: 'https://drive.google.com/drive/u/1/folders/1fMRNXev_8pvOHuoUXau5slvAs24CtzsI',
  capitulos: '20 + 2 extras'
},

{
  novela_id: 183,
  titulo: 'Estaba embarazado después del divorcio',
  ingles: 'I Was Pregnant After Divorce',
  original: '离婚后我怀孕了',
  slug: 'Estaba_embarazado_después_del_divorcio',
  tags: 'bl china pendiente moderno drama malentendidos matrimonio-arreglado mpreg ninos omegaverse transmigracion',
  autor: 'juan-xin-xigua',
  link: 'https://www.novelupdates.com/series/i-was-pregnant-after-divorce/',
  capitulos: '50'
},

{
  novela_id: 182,
  titulo: 'Esposa masculina fuertemente mimada',
  ingles: 'Strongly Pampered Male Wife',
  original: '强宠男妻',
  slug: 'Esposa_masculina_fuertemente_mimada',
  tags: 'bl china pendiente moderno drama matrimonio-arreglado mpreg vida-diaria',
  autor: 'chijiao-xia-de-lu',
  link: 'https://www.novelupdates.com/series/strongly-pampered-male-wife/',
  capitulos: '64'
},

{
  novela_id: 181,
  titulo: 'Epifanías del renacimiento',
  ingles: 'Epiphanies of Rebirth',
  original: '重生之豁然',
  slug: 'Epifanías_del_renacimiento',
  tags: 'bl china pendiente moderno comedia malentendidos matrimonio renacimiento vida-diaria',
  autor: 'yuan-hegu',
  link: 'https://www.novelupdates.com/series/epiphanies-of-rebirth/',
  capitulos: '85 + 12 extras'
},

{
  novela_id: 180,
  titulo: 'El emperador del cine pide el divorcio todos los días',
  ingles: 'The Film Emperor Asks for Divorce Every Day',
  original: '影帝每天都想离婚[穿书]',
  slug: 'El_emperador_del_cine_pide_el_divorcio_todos_los_días',
  tags: 'bl china pendiente moderno comedia industria-del-entretenimiento mpreg transmigracion',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/the-film-emperor-asks-for-divorce-every-day/',
  capitulos: '116 + 8 extras'
},

{
  novela_id: 179,
  titulo: 'Días en que salvé mi vida al lado del Husky',
  ingles: 'Life-Saving Days by the Husky’s Side',
  original: '在二哈身边保命的日子',
  slug: 'Días_en_que_salvé_mi_vida_al_lado_del_Husky',
  tags: 'bl china pendiente moderno comedia mascotas vida-escolar sobrenatural transmigracion yandere',
  autor: 'yishi-hua-shang',
  link: 'https://www.novelupdates.com/series/life-saving-days-by-the-huskys-side/',
  capitulos: '71 + 4 extras'
},

{
  novela_id: 178,
  titulo: 'Después de un matrimonio repentino con el tirano discapacitado',
  ingles: 'After a Flash Marriage With the Disabled Tyrant',
  original: '和残疾巨佬闪婚后',
  slug: 'Después_de_un_matrimonio_repentino_con_el_tirano_discapacitado',
  tags: 'bl china pendiente moderno discapacidad matrimonio-arreglado renacimiento venganza',
  autor: 'nie-si',
  link: 'https://www.novelupdates.com/series/after-a-flash-marriage-with-the-disabled-tyrant/',
  capitulos: '94 + 17 extras'
},

{
  novela_id: 177,
  titulo: 'Después de transmigrar hice llorar al antagonista',
  ingles: 'After Transmigrating I Made The Antagonist Cry',
  original: '穿书后我把反派弄哭了［娱乐圈］',
  slug: 'Después_de_transmigrar_hice_llorar_al_antagonista',
  tags: 'bl china pendiente moderno comedia industria-del-entretenimiento protagonista-gong vida-diaria transmigracion',
  autor: 'qiaomu-li',
  link: 'https://www.novelupdates.com/series/after-transmigrating-i-made-the-antagonist-cry/',
  capitulos: '75 + 3 extras'
},

{
  novela_id: 176,
  titulo: 'Después de ser transportado a un libro, adopté al villano',
  ingles: 'After Being Transported into a Book, I Adopted the Villain',
  original: '穿书后我收养了幼年期的反派',
  slug: 'Después_de_ser_transportado_a_un_libro,_adopté_al_villano',
  tags: 'bl china pendiente moderno discapacidad vida-diaria transmigracion yandere',
  autor: 'tian-ni-xiaomi-zhou',
  link: 'https://www.novelupdates.com/series/after-being-transported-into-a-book-i-adopted-the-villain/',
  capitulos: '86 + 2 extras'
},

{
  novela_id: 175,
  titulo: 'Después de que regresó la luz de la luna blanca, el sustituto cayó en una crisis de desempleo',
  ingles: 'After the White Moonlight Came Back, the Stand-in Fell Into Unemployment Crisis',
  original: '白月光回来后，替身陷入失业危机',
  slug: 'Después_de_que_regresó_la_luz_de_la_luna_blanca,_el_sustituto_cayó_en_una_crisis_de_desempleo',
  tags: 'bl china pendiente moderno comedia malentendidos',
  autor: 'xiang-lu-gua',
  link: 'https://www.novelupdates.com/series/after-the-white-moonlight-came-back-the-stand-in-fell-into-unemployment-crisis/',
  capitulos: '30 + 1 extra'
},

{
  novela_id: 174,
  titulo: 'Después de poseer al asistente inteligente del chico popular de la escuela',
  ingles: 'After I Possessed the Tmall Genie of the School Adonis',
  original: '穿进校草的天猫精灵后',
  slug: 'Después_de_poseer_al_asistente_inteligente_del_chico_popular_de_la_escuela',
  tags: 'bl china pendiente moderno comedia vida-escolar sobrenatural',
  autor: 'lin-ang-si',
  link: 'https://drive.google.com/drive/u/1/folders/1PkjPRT9tfA9fdTk58f34LECXQdepVEwF',
  capitulos: '80 + 4 extras'
},

{
  novela_id: 173,
  titulo: 'Después de convertirme en llanta de repuesto, el villano y el protagonista masculino me atacaron al mismo tiempo',
  ingles: 'After Becoming a Spare Tire, I Was Targeted by the Villain and the Male Lead at the Same Time',
  original: '成为备胎之后我被反派和男主同时盯上了',
  slug: 'Después_de_convertirme_en_llanta_de_repuesto,_el_villano_y_el_protagonista_masculino_me_atacaron_al_mismo_tiempo',
  tags: 'bl china pendiente moderno comedia compromiso-roto enemigos-a-amantes sistema vida-diaria transmigracion yandere',
  autor: 'yi-yezi',
  link: 'https://www.novelupdates.com/series/after-becoming-a-spare-tire-i-was-targeted-by-the-villain-and-the-male-lead-at-the-same-time/',
  capitulos: '154'
},

{
  novela_id: 172,
  titulo: 'Cada día después del matrimonio es realmente fragante',
  ingles: 'Every Day After Marriage Is Really Fragrant',
  original: '婚后每天都真香[穿书]',
  slug: 'Cada_día_después_del_matrimonio_es_realmente_fragante',
  tags: 'bl china pendiente moderno comedia matrimonio-arreglado mpreg transmigracion',
  autor: 'dongfeng-jixu',
  link: 'https://www.novelupdates.com/series/every-day-after-marriage-is-really-fragrant/',
  capitulos: '98 + 2 extras'
},

{
  novela_id: 171,
  titulo: 'Barra de progreso de la muerte',
  ingles: 'Death Progress Bar',
  original: '生存进度条[穿书]',
  slug: 'Barra_de_progreso_de_la_muerte',
  tags: 'bl china pendiente moderno comedia discapacidad malentendidos sistema sobrenatural transmigracion',
  autor: 'bu-hui-xia-qi',
  link: 'https://www.novelupdates.com/series/death-progress-bar/',
  capitulos: '167'
},

{
  novela_id: 170,
  titulo: 'Aspiraciones de superestrella',
  ingles: 'Superstar Aspirations',
  original: '巨星问鼎[重生]',
  slug: 'Aspiraciones_de_superestrella',
  tags: 'bl china pendiente moderno industria-del-entretenimiento r18 vida-diaria transmigracion',
  autor: 'mo-chen-huan',
  link: 'https://drive.google.com/drive/u/1/folders/1a_54djnutD9dct7v64GDALz4PdKQ8QBl',
  capitulos: '165 + 12 extras'
},

{
  novela_id: 169,
  titulo: 'Transmigrado a una tribu de bestias',
  ingles: 'Transmigrated into a Beast Tribe',
  original: '穿越之游兽部落',
  slug: 'Transmigrado_a_una_tribu_de_bestias',
  tags: 'bl china pendiente tribal hombre-bestia mpreg ninos vida-diaria transportado-a-otro-mundo',
  autor: 'zise-jingji',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-beast-tribe/',
  capitulos: '102'
},

{
  novela_id: 168,
  titulo: 'Renacimiento con la bestia',
  ingles: 'Rebirth With The Beast',
  original: '重生之与兽为伍',
  slug: 'Renacimiento_con_la_bestia',
  tags: 'bl china pendiente tribal hombre-bestia mpreg ninos transmigracion',
  autor: 'ye-bu-siyu',
  link: 'https://www.novelupdates.com/series/rebirth-with-the-beast/',
  capitulos: '123 + 4 extras'
},

{
  novela_id: 167,
  titulo: 'La primavera del tonto Gong',
  ingles: 'Silly Spring Attack',
  original: '憨攻的春天',
  slug: 'La_primavera_del_tonto_Gong',
  tags: 'bl china pendiente tribal hombre-bestia mpreg ninos protagonista-gong vida-diaria transportado-a-otro-mundo',
  autor: 'yi-luocheng-huo',
  link: 'https://www.novelupdates.com/series/silly-spring-attack/',
  capitulos: '79'
},

{
  novela_id: 166,
  titulo: 'Cruzando a lo Primitivo',
  ingles: 'Crossing to the Primitive',
  original: '带着游戏面板穿越原始',
  slug: 'Cruzando_a_lo_Primitivo',
  tags: 'bl china pendiente tribal comedia hombre-bestia sistema transportado-a-otro-mundo',
  autor: 'ye-shen',
  link: 'https://www.novelupdates.com/series/crossing-to-the-primitive/',
  capitulos: '109'
},

{
  novela_id: 165,
  titulo: 'Tienda Bestia Linda No. 138',
  ingles: 'Cute Beast Store No. 138',
  original: '138号异兽萌宠店',
  slug: 'Tienda_Bestia_Linda_No._138',
  tags: 'bl china pendiente futurista bestia-humanizada comedia no-humano transmigracion',
  autor: 'da-jiangshi',
  link: 'https://www.novelupdates.com/series/cute-beast-store-no-138/',
  capitulos: '171 + 6 extras'
},

{
  novela_id: 164,
  titulo: 'Superestrella favorita interestelar',
  ingles: 'Interstellar Favorite Superstar',
  original: '星际宠婚巨星',
  slug: 'Superestrella_favorita_interestelar',
  tags: 'bl china pendiente futurista comedia realeza transmigracion',
  autor: 'shen-qing',
  link: 'https://www.novelupdates.com/series/interstellar-favorite-superstar/',
  capitulos: '134'
},

{
  novela_id: 163,
  titulo: '¿Quieres tocar mi cola de pez?',
  ingles: 'Do You Want to Touch My Fish Tail?',
  original: '你想摸一下我的鱼尾巴吗',
  slug: 'Quieres_tocar_mi_cola_de_pez',
  tags: 'bl china pendiente futurista malentendidos matrimonio-arreglado no-humano sirena',
  autor: 'xi-ci-shang',
  link: 'https://www.novelupdates.com/series/do-you-want-to-touch-my-fish-tail/',
  capitulos: '47'
},

{
  novela_id: 162,
  titulo: 'Pareja de poder interestelar',
  ingles: 'Interstellar Power Couple',
  original: '星际强力联姻',
  slug: 'Pareja_de_poder_interestelar',
  tags: 'bl china pendiente futurista comedia matrimonio-arreglado mpreg ninos transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/interstellar-power-couple/',
  capitulos: '118 + 23 extras'
},

{
  novela_id: 161,
  titulo: 'Ofrecido en matrimonio',
  ingles: 'Offered Into Marriage',
  original: '奉崽成婚[星际]',
  slug: 'Ofrecido_en_matrimonio',
  tags: 'bl china pendiente futurista comedia hombre-bestia inteligencia-artificial mpreg ninos transmigracion',
  autor: 'gui-ban-jing',
  link: 'https://www.novelupdates.com/series/offered-into-marriage/',
  capitulos: '160 + 20 extras'
},

{
  novela_id: 160,
  titulo: 'O pretende ser B para el almirante violento',
  ingles: 'O Pretends to be B For The Violent Admiral',
  original: 'O装B给暴躁上将当男秘',
  slug: 'O_pretende_ser_B_para_el_almirante_violento',
  tags: 'bl china pendiente futurista comedia lucha-de-poder malentendidos mpreg omegaverse realeza',
  autor: 'gongzi-rou',
  link: 'https://www.novelupdates.com/series/o-pretends-to-be-b-for-the-violent-admiral/',
  capitulos: '95 + 5 extras'
},

{
  novela_id: 159,
  titulo: 'Mi compañero de cuarto probablemente no sea un omega',
  ingles: 'My Roommate Probably Is Not an Omega',
  original: '我的室友可能不是omega',
  slug: 'Mi_compañero_de_cuarto_probablemente_no_sea_un_omega',
  tags: 'bl china pendiente futurista comedia malentendidos omegaverse novela-erotica',
  autor: 'ablfish',
  link: 'https://www.novelupdates.com/series/my-roommate-probably-is-not-an-omega/',
  capitulos: '25'
},

{
  novela_id: 158,
  titulo: 'Me criaron después de ser una sirena',
  ingles: 'I Was Raised After Being a Mermaid',
  original: '变成人鱼被养了',
  slug: 'Me_criaron_después_de_ser_una_sirena',
  tags: 'bl china pendiente futurista malentendidos mpreg no-humano realeza sirena transmigracion',
  autor: 'hanmen-yatou',
  link: 'https://www.novelupdates.com/series/i-was-raised-after-being-a-mermaid/',
  capitulos: '99 + 1 extra'
},

{
  novela_id: 157,
  titulo: 'Levantar un bollo con un sistema de vida diaria',
  ingles: 'Raising a Bun with a Daily Life System',
  original: '带着生活系统养包子',
  slug: 'Levantar_un_bollo_con_un_sistema_de_vida_diaria',
  tags: 'bl china pendiente futurista comedia malentendidos mpreg ninos r18 sistema vida-diaria transmigracion',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/raising-a-bun-with-a-daily-life-system/',
  capitulos: '158'
},

{
  novela_id: 156,
  titulo: 'Lecciones sobre cómo criar una pareja',
  ingles: 'Lessons on Raising a Partner',
  original: '教你种植一个对象',
  slug: 'Lecciones_sobre_cómo_criar_una_pareja',
  tags: 'bl china pendiente futurista comedia no-humano r18 transmigracion',
  autor: 'aci-guniang',
  link: 'https://www.novelupdates.com/series/lessons-on-raising-a-partner/',
  capitulos: '126 + 11 extras'
},

{
  novela_id: 155,
  titulo: 'Heredé el imperio con un embarazo falso',
  ingles: 'I Inherited Empire with Fake Pregnancy',
  original: '假孕后我继承了帝国',
  slug: 'Heredé_el_imperio_con_un_embarazo_falso',
  tags: 'bl china pendiente futurista bestia-humanizada cultivo malentendidos mpreg no-humano transportado-a-otro-mundo',
  autor: 'lian-yi',
  link: 'https://www.novelupdates.com/series/i-inherited-empire-with-fake-pregnancy/',
  capitulos: '115 + 10 extras'
},

{
  novela_id: 154,
  titulo: 'Guía de matrimonio imperial',
  ingles: 'Imperial Marriage Guide',
  original: '帝国指婚指南',
  slug: 'Guía_de_matrimonio_imperial',
  tags: 'bl china pendiente futurista mpreg omegaverse novela-erotica',
  autor: 'ban-renjian',
  link: 'https://www.novelupdates.com/series/imperial-marriage-guide/',
  capitulos: '26'
},

{
  novela_id: 153,
  titulo: 'Transmigrado a la sirenita del jefe violento',
  ingles: 'Transmigrated Into the Violent Boss’ Little Mermaid',
  original: '穿成暴戾大佬的小人鱼',
  slug: 'Transmigrado_a_la_sirenita_del_jefe_violento',
  tags: 'bl china pendiente futurista lucha-de-poder matrimonio no-humano sirena sistema vida-diaria transmigracion',
  autor: 'xian-sanqian',
  link: 'https://drive.google.com/drive/u/4/folders/1QQANOW_YNXuM1rcKdQe10CJwSc8czXSX',
  capitulos: '106 + 10 extras'
},

{
  novela_id: 152,
  titulo: 'Este insecto macho se vio obligado a mantener a su familia',
  ingles: 'This Male Was Forced To Support His Family',
  original: '这只雄虫被迫养家[虫族]',
  slug: 'Este_insecto_macho_se_vio_obligado_a_mantener_a_su_familia',
  tags: 'bl china pendiente futurista discapacidad drama matrimonio no-humano protagonista-gong zerg',
  autor: 'wo-huai',
  link: 'https://www.novelupdates.com/series/this-male-was-forced-to-support-his-family/',
  capitulos: '118 + 4 extras'
},

{
  novela_id: 151,
  titulo: 'El último creador',
  ingles: 'The Last Creator',
  original: '最后一个造物主',
  slug: 'El_último_creador',
  tags: 'bl china pendiente futurista inteligencia-artificial no-humano vida-diaria',
  autor: 'biandan-yi-hao',
  link: 'https://www.novelupdates.com/series/the-last-creator/',
  capitulos: '78'
},

{
  novela_id: 150,
  titulo: 'El trabajo del héroe Zerg',
  ingles: 'Insectoids: The Job of the Males',
  original: '虫族之雄子的工作',
  slug: 'El_trabajo_del_héroe_Zerg',
  tags: 'bl china pendiente futurista comedia no-humano transmigracion zerg',
  autor: 'youcai-de-yaoshi',
  link: 'https://www.novelupdates.com/series/insectoids-the-job-of-the-males/',
  capitulos: '78'
},

{
  novela_id: 149,
  titulo: 'El general ama coleccionar pequeñas flores rojas',
  ingles: 'The General Loves to Collect Little Red Flowers',
  original: '将军爱集小红花',
  slug: 'El_general_ama_coleccionar_pequeñas_flores_rojas',
  tags: 'bl china pendiente futurista comedia matrimonio-arreglado mpreg omegaverse vida-diaria transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/the-general-loves-to-collect-little-red-flowers/',
  capitulos: '105 + 6 extras'
},

{
  novela_id: 148,
  titulo: 'Después de transmigrar en un Omega, fui marcado por el enemigo',
  ingles: 'After Transmigrating Into an Omega, I Was Marked by the Enemy',
  original: '标记选我我超甜',
  slug: 'Después_de_transmigrar_en_un_Omega,_fui_marcado_por_el_enemigo',
  tags: 'bl china pendiente futurista comedia enemigos-a-amantes matrimonio-arreglado mpreg omegaverse transmigracion yandere',
  autor: 'shi-quan',
  link: 'https://www.novelupdates.com/series/after-transmigrating-into-an-omega-i-was-marked-by-the-enemy/',
  capitulos: '115 + 11 extras'
},

{
  novela_id: 147,
  titulo: 'Después de transmigrar a un villano carne de cañon Zerg masculino',
  ingles: 'After Transmigrating Into a Villain Cannon Fodder Male Zerg',
  original: '穿成反派炮灰雄虫后[虫族]',
  slug: 'Después_de_transmigrar_a_un_villano_carne_de_cañon_Zerg_masculino',
  tags: 'bl china finalizado futurista comedia malentendidos matrimonio mpreg no-humano protagonista-gong sistema transmigracion yandere zerg',
  autor: 'mu-liang-ren',
  link: 'https://drive.google.com/drive/u/1/folders/16zx9i_uRJTwzk9sOp3vU74uWycnB8wdK',
  capitulos: '71 + 21 extras'
},

{
  novela_id: 146,
  titulo: 'Después de convertirme en el protagonista alfa, arrebaté el Omega carne de cañón',
  ingles: 'After Becoming the Alpha Protagonist, I Snatched the Cannon Fodder Omega',
  original: '穿成主角A后把炮灰O扛跑了',
  slug: 'Después_de_convertirme_en_el_protagonista_alfa,_arrebaté_el_Omega_carne_de_cañón',
  tags: 'bl china pendiente futurista matrimonio-arreglado omegaverse protagonista-gong transmigracion',
  autor: 'caomei-tuotuo',
  link: 'https://www.novelupdates.com/series/after-becoming-the-alpha-protagonist-i-snatched-the-cannon-fodder-omega/',
  capitulos: '96 + 4 extras'
},

{
  novela_id: 145,
  titulo: 'Después de casarme, renacieron los que me traicionaron',
  ingles: 'After I Got Married, Those Who Betrayed Me Were Reborn',
  original: '结婚后，渣过我的人都重生了',
  slug: 'Después_de_casarme,_renacieron_los_que_me_traicionaron',
  tags: 'bl china finalizado futurista aristocracia discapacidad lucha-de-poder malentendidos matrimonio-arreglado omegaverse realeza renacimiento',
  autor: 'yu-luo-qing-chen',
  link: 'https://drive.google.com/drive/u/1/folders/1eGaqCCLAp9uCKn8BK7pIX-7kxBip8RO8',
  capitulos: '112 + 13 extras'
},

{
  novela_id: 144,
  titulo: 'De vuelta a la cima',
  ingles: 'Back to the Peak',
  original: '重临巅峰',
  slug: 'De_vuelta_a_la_cima',
  tags: 'bl china pendiente futurista cultivo protagonista-gong vida-diaria',
  autor: 'jue-jue',
  link: 'https://www.novelupdates.com/series/back-to-the-peak/',
  capitulos: '167'
},

{
  novela_id: 143,
  titulo: 'Contrato de matrimonio de GunGun ojos Yin Yang',
  ingles: 'Yin Yang Eye GunGun’s Marriage Contract',
  original: '阴阳眼滚滚婚约[星际]',
  slug: 'Contrato_de_matrimonio_de_GunGun_ojos_Yin_Yang',
  tags: 'bl china pendiente futurista bestia-humanizada comedia cultivo no-humano vida-diaria terror transmigracion',
  autor: 'shui-sensen',
  link: 'https://www.novelupdates.com/series/yin-yang-eye-gunguns-marriage-contract/',
  capitulos: '115'
},

{
  novela_id: 142,
  titulo: 'Soy un limo',
  ingles: 'I am a Slime',
  original: 'ぼくはスライム',
  slug: 'Soy_un_limo',
  tags: 'bl japon pendiente fantasia bestias no-humano oneshot novela-erotica',
  autor: 'momose-wasabi',
  link: 'https://www.novelupdates.com/series/i-am-a-slime/',
  capitulos: '1'
},

{
  novela_id: 141,
  titulo: 'Renacer en un juego de Slash',
  ingles: 'Reborn into A Slash Game',
  original: '重生到搅基游戏',
  slug: 'Renacer_en_un_juego_de_Slash',
  tags: 'bl china pendiente fantasia bestias comedia no-humano novela-erotica transmigracion',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/reborn-into-a-slash-game/',
  capitulos: '80 + extras'
},

{
  novela_id: 140,
  titulo: 'Período de cortejo',
  ingles: 'Courtship Period',
  original: '求偶期',
  slug: 'Período_de_cortejo',
  tags: 'bl china pendiente fantasia agricultura bestias malentendidos matrimonio mpreg no-humano protagonista-gong',
  autor: 'qi-guo-cha',
  link: 'https://www.novelupdates.com/series/courtship-period/',
  capitulos: '93 + 8 extras'
},

{
  novela_id: 139,
  titulo: 'Nutrir al héroe para evitar la muerte',
  ingles: 'Nurturing the Hero to Avoid Death',
  original: '死にたくないので英雄様を育てる事にします',
  slug: 'Nutrir_al_héroe_para_evitar_la_muerte',
  tags: 'bl japon pendiente europa-antigua aristocracia comedia punto-de-vista-multiple vida-diaria novela-erotica transportado-a-otro-mundo',
  autor: 'yomogino',
  link: 'https://www.novelupdates.com/series/nurturing-the-hero-to-avoid-death/',
  capitulos: '45 + extras'
},

{
  novela_id: 138,
  titulo: '¡Nunca pensé que serías este tipo de héroe!',
  ingles: 'Never Thought You’d Be This Kind of Hero!',
  original: '没想到你是这样的勇者！',
  slug: 'Nunca_pensé_que_serías_este_tipo_de_héroe',
  tags: 'bl china pendiente fantasia comedia transportado-a-otro-mundo',
  autor: 'ji-er-ji-jia',
  link: 'https://www.novelupdates.com/series/never-thought-youd-be-this-kind-of-hero/',
  capitulos: '182'
},

{
  novela_id: 137,
  titulo: 'Me reencarné como el villano de un eroge, pero antes de darme cuenta, me convertí en un objetivo de captura',
  ingles: 'I Reincarnated as the Villain in an Eroge, But Before I Realized, I Became a Capture Target',
  original: 'エロゲーの悪役に転生したはずなのに気付けば攻略対象者になっていた',
  slug: 'Me_reencarné_como_el_villano_de_un_eroge,_pero_antes_de_darme_cuenta,_me_convertí_en_un_objetivo_de_captura',
  tags: 'bl japon pendiente fantasia comedia reencarnacion novela-erotica yandere',
  autor: 'yuzuki-haruka',
  link: 'https://www.novelupdates.com/series/i-reincarnated-as-the-villain-in-an-eroge-but-before-i-realized-i-became-a-capture-target/',
  capitulos: '126'
},

{
  novela_id: 136,
  titulo: 'Hacerlo con el creador en un juego de supervivencia',
  ingles: 'Doing It With the Creator in a Survival Game',
  original: '一不小心就在逃生游戏里被主神上了',
  slug: 'Hacerlo_con_el_creador_en_un_juego_de_supervivencia',
  tags: 'bl china pendiente fantasia no-humano reencarnacion novela-erotica sobrenatural terror yandere',
  autor: 'xie-renxuan',
  link: 'https://www.novelupdates.com/series/doing-it-with-the-creator-in-a-survival-game/',
  capitulos: '135'
},

{
  novela_id: 135,
  titulo: 'Esta maldita sed de supervivencia',
  ingles: 'This Damned Thirst for Survival',
  original: '这该死的求生欲[穿书]',
  slug: 'Esta_maldita_sed_de_supervivencia',
  tags: 'bl china pendiente fantasia enemigos-a-amantes no-humano sobrenatural terror transmigracion yandere',
  autor: 'wang-sanshan',
  link: 'https://www.novelupdates.com/series/this-damned-thirst-for-survival/',
  capitulos: '224 + 14 extras'
},

{
  novela_id: 134,
  titulo: '¡Esta forma de transmigración es definitivamente incorrecta!',
  ingles: 'This Way of Transmigration Is Definitely Wrong!',
  original: '这穿越方式绝逼不对！',
  slug: 'Esta_forma_de_transmigración_es_definitivamente_incorrecta',
  tags: 'bl china pendiente fantasia comedia transmigracion yandere',
  autor: 'shui-bingleng',
  link: 'https://www.novelupdates.com/series/this-way-of-transmigration-is-definitely-wrong/',
  capitulos: '169 + 23 extras'
},

{
  novela_id: 133,
  titulo: 'El príncipe desvergonzado',
  ingles: 'The Shameless Prince',
  original: '不知羞恥的王子',
  slug: 'El_príncipe_desvergonzado',
  tags: 'bl china pendiente fantasia comedia oneshot protagonista-gong',
  autor: 'meng-bulang',
  link: 'https://www.novelupdates.com/series/the-shameless-prince/',
  capitulos: '1'
},

{
  novela_id: 132,
  titulo: 'El personaje virtual que crié personalmente quiere casarse conmigo',
  ingles: 'The Virtual Character I Personally Raised Wants to Marry Me',
  original: '穿进全息游戏搞基建',
  slug: 'El_personaje_virtual_que_crié_personalmente_quiere_casarse_conmigo',
  tags: 'bl china pendiente fantasia inteligencia-artificial malentendidos realeza sistema transmigracion yandere',
  autor: 'zui-ai-meizi-jiu',
  link: 'https://www.novelupdates.com/series/the-virtual-character-i-personally-raised-wants-to-marry-me/',
  capitulos: '442 + 245 extras'
},

{
  novela_id: 131,
  titulo: 'El origen del diablo',
  ingles: 'The Devil’s Origin',
  original: '魔王のはじめてのモンスターメーカー',
  slug: 'El_origen_del_diablo',
  tags: 'bl japon pendiente fantasia abuso bestia-humanizada bestias harem ninos no-humano shota sistema novela-erotica transmigracion',
  autor: 'misheng',
  link: 'https://www.novelupdates.com/series/the-devils-origin/',
  capitulos: '110 (Abandonado)'
},

{
  novela_id: 130,
  titulo: 'Diario de criar una sirena',
  ingles: 'Diary of Raising a Mermaid',
  original: '人鱼饲养日记',
  slug: 'Diario_de_criar_una_sirena',
  tags: 'bl china pendiente fantasia no-humano sirena transmigracion',
  autor: 'you-yu-jiang',
  link: 'https://www.novelupdates.com/series/diary-of-raising-a-mermaid/',
  capitulos: '104 + 6 extras'
},

{
  novela_id: 129,
  titulo: 'Saber en la tercera mañana',
  ingles: 'Know on the Third Morning',
  original: '三度目の朝に知る',
  slug: 'Saber_en_la_tercera_mañana',
  tags: 'bl japon finalizado europa-antigua novela-erotica reencarnacion',
  autor: 'shiina',
  link: 'https://drive.google.com/drive/u/1/folders/1JxrWMUKDWFM1YFav_LCCs4o5q7jVvF3N',
  capitulos: '3'
},

{
  novela_id: 128,
  titulo: '¡Quiero disfrutar de la vida en el campo!',
  ingles: 'I Want To Enjoy A Country Life!',
  original: '田舎ライフを楽しみたいんだ！',
  slug: 'Quiero_disfrutar_de_la_vida_en_el_campo',
  tags: 'bl japon pendiente europa-antigua agricultura harem incesto realeza reencarnacion novela-erotica yandere',
  autor: 'botamochi',
  link: 'https://www.novelupdates.com/series/i-want-to-enjoy-a-country-life/',
  capitulos: '23 + 2 extras'
},

{
  novela_id: 127,
  titulo: 'Transmigrar en un personaje de carne de cañón para rehabilitar el plan de villano',
  ingles: 'Transmigrating into a Mob Character to Rehabilitate the Villain Plan',
  original: '穿成炮灰之反派养成计划',
  slug: 'Transmigrar_en_un_personaje_de_carne_de_cañón_para_rehabilitar_el_plan_de_villano',
  tags: 'bl china finalizado cultivacion amnesia cultivo drama r18 transmigracion xianxia yandere',
  autor: 'sha-xiao-wan',
  link: 'https://drive.google.com/drive/u/1/folders/19V5GMFx1F66gdWFXPFl3_jAVmhXWtUrT',
  capitulos: '92 + 14 extras'
},

{
  novela_id: 126,
  titulo: 'Transmigrado al mundo del "Señor Demonio Wu Zun"',
  ingles: 'Transmigrated into the World of “Demon Lord Wu Zun”',
  original: '穿越魔皇武尊',
  slug: 'Transmigrado_al_mundo_del_Señor_Demonio_Wu_Zun',
  tags: 'bl china pendiente cultivacion canibalismo bestias cultivo r18 transmigracion yandere',
  autor: 'yi-luocheng-huo',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-world-of-demon-lord-wu-zun/',
  capitulos: '133 + 19 extras'
},

{
  novela_id: 125,
  titulo: 'Todos los días el protagonista quiere capturarme',
  ingles: 'Every Day the Protagonist Wants to Capture Me',
  original: '主角每天都想攻略我',
  slug: 'Todos_los_días_el_protagonista_quiere_capturarme',
  tags: 'bl china finalizado cultivacion comedia cultivo sistema transmigracion xianxia yandere',
  autor: 'qing-duan',
  link: 'https://drive.google.com/drive/u/1/folders/1ZfH2DBFAaCrUnbP835twYOrmo4tCSk1o',
  capitulos: '80 + 8 extras'
},

{
  novela_id: 124,
  titulo: 'Salvar al villano por error',
  ingles: 'Mistakenly Saving the Villain',
  original: '论救错反派的下场',
  slug: 'Salvar_al_villano_por_error',
  tags: 'bl china pendiente cultivacion amnesia cultivo maestro-discipulo malentendidos sistema tragedia transmigracion xianxia yandere',
  autor: 'feng-yu-nie',
  link: 'https://www.novelupdates.com/series/mistakenly-saving-the-villain/',
  capitulos: '119 + 1 extra'
},

{
  novela_id: 123,
  titulo: 'Renacimiento del Ser Celestial Supremo',
  ingles: 'Rebirth of the Supreme Celestial Being',
  original: '重生之至尊仙侣',
  slug: 'Renacimiento_del_Ser_Celestial_Supremo',
  tags: 'bl china pendiente cultivacion cultivo mpreg protagonista-gong renacimiento xianxia',
  autor: 'bing-tang-lian-zi-geng',
  link: 'https://www.novelupdates.com/series/rebirth-of-the-supreme-celestial-being/',
  capitulos: '774 + 12 extras'
},

{
  novela_id: 122,
  titulo: 'No es fácil ser un maestro',
  ingles: 'It’s Not Easy Being a Master',
  original: '师尊难为',
  slug: 'No_es_fácil_ser_un_maestro',
  tags: 'bl china pendiente cultivacion cultivo maestro-discipulo renacimiento transmigracion xianxia yandere',
  autor: 'jin-xi-gu-nian',
  link: 'https://www.novelupdates.com/series/its-not-easy-being-a-master/comment-page-8/',
  capitulos: '79 + 3 extras'
},

{
  novela_id: 121,
  titulo: 'Mi shidi todavía no me ha matado',
  ingles: 'My Junior Still Hasn’t Killed Me',
  original: '师弟还不杀我灭口',
  slug: 'Mi_shidi_todavía_no_me_ha_matado',
  tags: 'bl china pendiente cultivacion comedia cultivo transmigracion xianxia yandere',
  autor: 'zi-lu',
  link: 'https://www.novelupdates.com/series/my-junior-still-hasnt-killed-me/',
  capitulos: '29 + 5 extras'
},

{
  novela_id: 120,
  titulo: 'Me convertí en una esposa virtuosa y una madre amorosa en otro mundo de cultivación',
  ingles: 'I Became A Virtuous Wife and Loving Mother in another Cultivation World',
  original: '贤妻良母',
  slug: 'Me_convertí_en_una_esposa_virtuosa_y_una_madre_amorosa_en_otro_mundo_de_cultivación',
  tags: 'bl china pendiente cultivacion cultivo matrimonio-arreglado mpreg ninos transmigracion xuanhuan',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/i-became-a-virtuous-wife-and-loving-mother-in-another-cultivation-world/',
  capitulos: '560'
},

{
  novela_id: 119,
  titulo: 'La tarea diaria de evitar que mi discípulo se pase al lado oscuro',
  ingles: 'The Daily Task of Preventing My Disciple from Turning to the Dark Side',
  original: '每天都要防止徒弟上天',
  slug: 'La_tarea_diaria_de_evitar_que_mi_discípulo_se_pase_al_lado_oscuro',
  tags: 'bl china finalizado cultivacion comedia cultivo maestro-discipulo renacimiento xianxia yandere',
  autor: 'hei-mao-ni-ni',
  link: 'https://drive.google.com/drive/u/1/folders/15TwAdA103lGt6xINTEfUrnkZ_u7kYivm',
  capitulos: '97'
},

{
  novela_id: 118,
  titulo: 'He llevado al villano por mal camino, ¿cómo lo soluciono?',
  ingles: 'I’ve Led the Villain Astray, How Do I Fix It?',
  original: '把反派养歪了肿么破',
  slug: 'He_llevado_al_villano_por_mal_camino,_cómo_lo_soluciono',
  tags: 'bl china pendiente cultivacion comedia cultivo xianxia yandere',
  autor: 'yan-ye',
  link: 'https://www.novelupdates.com/series/ive-led-the-villain-astray-how-do-i-fix-it/',
  capitulos: '469 + 6 extras'
},

{
  novela_id: 117,
  titulo: 'Encubierto del culto del mal sale a la luz todos los días',
  ingles: 'Evil Cult Undercover Gets Exposed Everyday',
  original: '魔教卧底每天都在露馅',
  slug: 'Encubierto_del_culto_del_mal_sale_a_la_luz_todos_los_días',
  tags: 'bl china pendiente cultivacion comedia cultivo enemigos-a-amantes malentendidos transmigracion',
  autor: 'lu-tianyi',
  link: 'https://www.novelupdates.com/series/evil-cult-undercover-gets-exposed-everyday/',
  capitulos: '12'
},

{
  novela_id: 116,
  titulo: 'El sistema de autosalvación del villano escoria',
  ingles: 'The Scum Villain’s Self-Saving System',
  original: '人渣反派自救系统',
  slug: 'El_sistema_de_autosalvación_del_villano_escoria',
  tags: 'bl china finalizado cultivacion comedia cultivo maestro-discipulo r18 sistema transmigracion xianxia yandere',
  autor: 'mo-xiang-tongxiu',
  link: 'https://drive.google.com/drive/u/1/folders/1AWWFOn44V5agDdTHgvjAisjf5kOC9nU6',
  capitulos: '81 + 20 extras'
},

{
  novela_id: 115,
  titulo: 'El Rey Demonio siempre piensa que estoy secretamente enamorado de él',
  ingles: 'The Demon King Always Thinks I’m Secretly In Love With Him',
  original: '魔君总以为我暗恋他[穿书]',
  slug: 'El_Rey_Demonio_siempre_piensa_que_estoy_secretamente_enamorado_de_él',
  tags: 'bl china pendiente cultivacion comedia cultivo malentendidos sistema transmigracion xianxia',
  autor: 'dong-fang-huang-gua',
  link: 'https://www.novelupdates.com/series/the-demon-king-always-thinks-im-secretly-in-love-with-him/',
  capitulos: '103 + 1 extra'
},

{
  novela_id: 114,
  titulo: 'El regreso de la esposa abandonada',
  ingles: 'Comeback of the Abandoned Wife',
  original: '废妻重生',
  slug: 'El_regreso_de_la_esposa_abandonada',
  tags: 'bl china pendiente cultivacion cultivo matrimonio-arreglado renacimiento venganza xianxia',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/comeback-of-the-abandoned-wife/',
  capitulos: '386'
},

{
  novela_id: 113,
  titulo: 'El pequeño demonio zorro de dos colas y su sacerdote taoísta Gong',
  ingles: 'The Two-Tailed Little Fox Demon and His Taoist Priest Gong',
  original: '兩條尾巴的小狐妖和他家道長攻',
  slug: 'El_pequeño_demonio_zorro_de_dos_colas_y_su_sacerdote_taoísta_Gong',
  tags: 'bl china pendiente cultivacion bestia-humanizada cultivo no-humano novela-erotica xianxia',
  autor: 'liulian-qiaokeli',
  link: 'https://www.novelupdates.com/series/the-two-tailed-little-fox-demon-and-his-taoist-priest-gong/',
  capitulos: '56 + 3 extras'
},

{
  novela_id: 112,
  titulo: 'El mundo entero es mi crematorio',
  ingles: 'The Whole World Is My Crematorium',
  original: '全天下为我火葬场',
  slug: 'El_mundo_entero_es_mi_crematorio',
  tags: 'bl china pendiente cultivacion amnesia cultivo malentendidos sistema tragedia transmigracion xianxia',
  autor: 'bikabi',
  link: 'https://www.novelupdates.com/series/the-whole-world-is-my-crematorium/',
  capitulos: '105 + 4 extras'
},

{
  novela_id: 111,
  titulo: 'El gran maestro de la cultivación demoníaca',
  ingles: 'The Founder of Diabolism',
  original: '魔道祖师',
  slug: 'El_gran_maestro_de_la_cultivación_demoníaca',
  tags: 'bl china finalizado cultivacion cultivo drama r18 reencarnacion sobrenatural xianxia',
  autor: 'mo-xiang-tongxiu',
  link: 'https://drive.google.com/drive/u/1/folders/1p6o5MU_o0mYl4j2ksBaZEYzVzrj5fchi',
  capitulos: '113 + 14 extras'
},

{
  novela_id: 110,
  titulo: 'El desperdicio del renacimiento contraataca',
  ingles: 'The Rebirth Waste Strikes Back',
  original: '重生之废材来袭',
  slug: 'El_desperdicio_del_renacimiento_contraataca',
  tags: 'bl china pendiente cultivacion comedia compromiso-roto cultivo malentendidos reencarnacion xuanhuan',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/the-rebirth-waste-strikes-back/',
  capitulos: '262 + 1 extra'
},

{
  novela_id: 109,
  titulo: 'Volver a cero',
  ingles: 'Back to Zero',
  original: '重生之归零',
  slug: 'Volver_a_cero',
  tags: 'bl china pendiente china-antigua matrimonio-arreglado mpreg protagonista-gong realeza renacimiento',
  autor: 'yi-ting-mo-tong',
  link: 'https://www.novelupdates.com/series/back-to-zero/',
  capitulos: '91'
},

{
  novela_id: 108,
  titulo: 'Viajar a través de la antigüedad para ser comerciante',
  ingles: 'Traveling Through Ancient Times To Be a Shopkeeper',
  original: '穿越古代做货郎',
  slug: 'Viajar_a_través_de_la_antigüedad_para_ser_comerciante',
  tags: 'bl china finalizado china-antigua ger matrimonio mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'yishi-yu',
  link: 'https://drive.google.com/drive/u/1/folders/1tsM0rv9zHbDTNgBGcKwQCQilCUWUw0eS',
  capitulos: '97 + 4 extras'
},

{
  novela_id: 107,
  titulo: 'Transmigrar a la antigüedad con la conveniencia de Lu',
  ingles: 'Transmigrating to the Ancient Times with Lu’s Convenience',
  original: '带着小卖部到古代',
  slug: 'Transmigrar_a_la_antigüedad_con_la_conveniencia_de_Lu',
  tags: 'bl china pendiente china-antigua agricultura ger matrimonio-arreglado mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/transmigrating-to-the-ancient-times-with-lus-convenience/',
  capitulos: '175'
},

{
  novela_id: 106,
  titulo: 'Transmigrar a la amada esposa fugitiva del Príncipe Regente',
  ingles: 'Transmigrating into the Prince Regent’s Beloved Runaway Wife',
  original: '穿成摄政王的侍爱逃妻',
  slug: 'Transmigrar_a_la_amada_esposa_fugitiva_del_Príncipe_Regente',
  tags: 'bl china pendiente china-antigua aristocracia malentendidos matrimonio-arreglado transmigracion',
  autor: 'ruo-xing-ruo-chen',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-prince-regents-beloved-runaway-wife/',
  capitulos: '128 + 11 extras'
},

{
  novela_id: 105,
  titulo: 'Transmigración: la vida agrícola de un "tonto"',
  ingles: 'Transmigration: The Farm Life of a "Fool"',
  original: '穿越之农家如画',
  slug: 'Transmigración_la_vida_agrícola_de_un_tonto',
  tags: 'bl china pendiente china-antigua agricultura ger mpreg ninos protagonista-gong vida-diaria transmigracion',
  autor: 'zixi',
  link: 'https://www.novelupdates.com/series/transmigration-the-farm-life-of-a-fool/',
  capitulos: '295 + 25 extras'
},

{
  novela_id: 104,
  titulo: 'Tienes un correo: un cuento con moraleja',
  ingles: 'You’ve Got Mail: A Cautionary Tale',
  original: '飛鴿交友須謹慎',
  slug: 'Tienes_un_correo_un_cuento_con_moraleja',
  tags: 'bl china pendiente china-antigua comedia vida-diaria novela-erotica',
  autor: 'hei-dan-bai',
  link: 'https://www.novelupdates.com/series/youve-got-mail-a-cautionary-tale/',
  capitulos: '106'
},

{
  novela_id: 103,
  titulo: 'Soy la cruel carne de cañón del libro',
  ingles: 'I’m The Vicious Cannon Fodder In The Book',
  original: '我是穿书文里的恶毒炮灰',
  slug: 'Soy_la_cruel_carne_de_cañón_del_libro',
  tags: 'bl china pendiente china-antigua lucha-de-poder matrimonio-arreglado mpreg realeza transmigracion venganza',
  autor: 'nian-luan',
  link: 'https://www.novelupdates.com/series/im-the-vicious-cannon-fodder-in-the-book/',
  capitulos: '122 + 10 extras'
},

{
  novela_id: 102,
  titulo: '¡Te ruego que rompas este compromiso!',
  ingles: 'Begging You to Break Off This Engagement!',
  original: '求求你退婚吧',
  slug: 'Te_ruego_que_rompas_este_compromiso',
  tags: 'bl china pendiente china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/begging-you-to-break-off-this-engagement/',
  capitulos: '97 + 12 extras'
},

{
  novela_id: 101,
  titulo: 'Renacimiento como gobernante fatuo y autoindulgente',
  ingles: 'Rebirth As a Fatuous and Self-indulgent Ruler',
  original: '重生成昏君',
  slug: 'Renacimiento_como_gobernante_fatuo_y_autoindulgente',
  tags: 'bl china pendiente china-antigua protagonista-gong realeza transmigracion yandere',
  autor: 'xie-er',
  link: 'https://www.novelupdates.com/series/rebirth-as-a-fatuous-and-self-indulgent-ruler/',
  capitulos: '321'
},

{
  novela_id: 100,
  titulo: 'Primavera una vez más',
  ingles: 'Spring Once More',
  original: '又一春',
  slug: 'Primavera_una_vez_más',
  tags: 'bl china pendiente china-antigua comedia harem protagonista-gong realeza transmigracion',
  autor: 'da-feng-gua-guo',
  link: 'https://www.novelupdates.com/series/spring-once-more/',
  capitulos: '65'
},

{
  novela_id: 99,
  titulo: 'Por los campos de cultivo llenos de primavera',
  ingles: 'Through the Farming Fields Full of Spring',
  original: '穿越种田之满堂春',
  slug: 'Por_los_campos_de_cultivo_llenos_de_primavera',
  tags: 'bl china pendiente china-antigua agricultura ger mpreg ninos transmigracion',
  autor: 'wentun-de-nuren',
  link: 'https://www.novelupdates.com/series/through-the-farming-fields-full-of-spring/',
  capitulos: '98'
},

{
  novela_id: 98,
  titulo: 'Pequeño Ger, vida lenta en otro mundo',
  ingles: 'Little Ger, Slow Life in Another World',
  original: '小哥儿异世慢生活',
  slug: 'Pequeño_Ger,_vida_lenta_en_otro_mundo',
  tags: 'bl china pendiente china-antigua agricultura ger mpreg vida-diaria transmigracion',
  autor: 'j112233',
  link: 'https://www.novelupdates.com/series/little-ger-slow-life-in-another-world/',
  capitulos: '80 + 5 extras'
},

{
  novela_id: 97,
  titulo: 'Novia falsa',
  ingles: 'Counterfeit Bride',
  original: '冒牌新娘',
  slug: 'Novia_falsa',
  tags: 'bl china finalizado china-antigua gender-bender novela-erotica',
  autor: 'zi-yue',
  link: 'https://drive.google.com/drive/u/1/folders/1Cae0TTlTAw28fCnb6N640eKJKc2CB0-v',
  capitulos: '10 + 1 epílogo'
},

{
  novela_id: 96,
  titulo: 'No te amé lo suficiente',
  ingles: 'Didn’t Love You Enough',
  original: '重生之宠你不够',
  slug: 'No_te_amé_lo_suficiente',
  tags: 'bl china en-proceso china-antigua drama ger matrimonio mpreg realeza renacimiento',
  autor: 'zuiaimiaomiao',
  link: 'https://drive.google.com/drive/u/4/folders/1YizuNmLo9RP-b_5aPCeIiVjfUOp6Wb9M',
  capitulos: '56'
},

{
  novela_id: 95,
  titulo: '¡No puedes ser feroz conmigo!',
  ingles: 'You Can’t Be Fierce Towards Me!',
  original: '你不许凶我！QAQ【重生】',
  slug: 'No_puedes_ser_feroz_conmigo',
  tags: 'bl china pendiente china-antigua comedia renacimiento vida-diaria venganza',
  autor: 'xiu-sheng',
  link: 'https://www.novelupdates.com/series/you-cant-be-fierce-towards-me/',
  capitulos: '128 + 3 extras'
},

{
  novela_id: 94,
  titulo: 'Mi marido duro',
  ingles: 'My Tough Husband',
  original: '家有悍夫郎',
  slug: 'Mi_marido_duro',
  tags: 'bl china pendiente china-antigua comedia cultivo ger mpreg protagonista-gong realeza transmigracion',
  autor: 'xie-er',
  link: 'https://www.novelupdates.com/series/my-tough-husband/',
  capitulos: '259 + 3 extras'
},

{
  novela_id: 93,
  titulo: 'Mi guardia de la sombra me marcó después de fingir ser un alfa',
  ingles: 'I Got Marked By My Shadow Guard After Pretending To Be An Alpha',
  original: '装A后被影卫标记了',
  slug: 'Mi_guardia_de_la_sombra_me_marcó_después_de_fingir_ser_un_alfa',
  tags: 'bl china pendiente china-antigua mpreg omegaverse realeza',
  autor: 'chi-ling',
  link: 'https://www.novelupdates.com/series/i-got-marked-by-my-shadow-guard-after-pretending-to-be-an-alpha/',
  capitulos: '24 + 1 extra'
},

{
  novela_id: 92,
  titulo: 'La vida agrícola diaria de Li Jin transmigrado',
  ingles: 'The Transmigrated Li Jin’s Daily Farming Life',
  original: '穿越之黎锦的农家日常',
  slug: 'La_vida_agrícola_diaria_de_Li_Jin_transmigrado',
  tags: 'bl china pendiente china-antigua agricultura ger mpreg ninos protagonista-gong transmigracion',
  autor: 'hui-mou-yi-ban-xia',
  link: 'https://www.novelupdates.com/series/the-transmigrated-li-jins-daily-farming-life/',
  capitulos: '140 + 20 extras'
},

{
  novela_id: 91,
  titulo: 'La transmigración del maestro de la planta espiritual',
  ingles: 'The Spiritual Plant Master Transmigration',
  original: '穿越之灵植师',
  slug: 'La_transmigración_del_maestro_de_la_planta_espiritual',
  tags: 'bl china pendiente china-antigua agricultura cultivo mpreg ninos protagonista-gong vida-diaria transmigracion',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/the-spiritual-plant-master-transmigration/',
  capitulos: '397'
},

{
  novela_id: 90,
  titulo: 'La transmigración de Mian [a regañadientes] se convierte en su hombre [esposa]',
  ingles: 'Transmigration of Mian [Reluctantly] Becomes His Man [Wife]',
  original: '穿越之勉为其男',
  slug: 'La_transmigración_de_Mian_[a_regañadientes]_se_convierte_en_su_hombre_[esposa]',
  tags: 'bl china pendiente china-antigua agricultura cultivo mpreg ninos vida-diaria transmigracion',
  autor: 'lianxi-ningmou',
  link: 'https://www.novelupdates.com/series/transmigration-of-mian-reluctantly-becomes-his-man-wife/',
  capitulos: '222'
},

{
  novela_id: 89,
  titulo: 'Hoy el Primer Ministro también quiere golpearse la cabeza contra el pilar',
  ingles: 'Today Prime Minister Also Wants to Bang His Head on the Pillar',
  original: '丞相今天也想撞柱子',
  slug: 'Hoy_el_Primer_Ministro_también_quiere_golpearse_la_cabeza_contra_el_pilar',
  tags: 'bl china pendiente china-antigua comedia matrimonio punto-de-vista-multiple realeza novela-erotica',
  autor: 'bazaodashe',
  link: 'https://www.novelupdates.com/series/today-prime-minister-also-wants-to-bang-his-head-on-the-pillar/',
  capitulos: '21'
},

{
  novela_id: 88,
  titulo: 'Ganarse la vida, realizar exámenes y apoyar a la familia a través del sistema de exámenes imperial rural',
  ingles: 'Earning a Living, Taking Examinations, and Supporting the Family Through the Rural Imperial Examinations System',
  original: '农门科举之赚钱，考试，养家',
  slug: 'Ganarse_la_vida,_realizar_exámenes_y_apoyar_a_la_familia_a_través_del_sistema_de_exámenes_imperial_rural',
  tags: 'bl china pendiente china-antigua agricultura comedia ger mpreg vida-diaria transmigracion',
  autor: 'tu-yue-guan',
  link: 'https://www.novelupdates.com/series/earning-a-living-taking-examinations-and-supporting-the-family-through-the-rural-imperial-examinations-system/',
  capitulos: '170 + 13 extras'
},

{
  novela_id: 87,
  titulo: 'El tirano cruel',
  ingles: 'The Cruel Tyrant',
  original: '暴君',
  slug: 'El_tirano_cruel',
  tags: 'bl china pendiente china-antigua enemigos-a-amantes harem realeza novela-erotica transmigracion',
  autor: 'rong-heng',
  link: 'https://www.novelupdates.com/series/the-cruel-tyrant/comment-page-2/?pg=1',
  capitulos: '127 + 4 extras'
},

{
  novela_id: 86,
  titulo: 'El sustituto de la belleza enfermiza abandono el trabajo',
  ingles: 'The Sickly Beauty Substitute Called It Quits',
  original: '病美人替身不干了',
  slug: 'El_sustituto_de_la_belleza_enfermiza_abandono_el_trabajo',
  tags: 'bl china pendiente china-antigua lucha-de-poder matrimonio-arreglado renacimiento',
  autor: 'yun-chutang',
  link: 'https://www.novelupdates.com/series/the-sickly-beauty-substitute-called-it-quits/',
  capitulos: '248 + 43 extras'
},

{
  novela_id: 85,
  titulo: 'El renacimiento del general que siempre se ve a sí mismo como un sustituto',
  ingles: 'The Rebirth Of The General Who Always Sees Himself As A Replacement',
  original: '重生之将军总把自己当替身',
  slug: 'El_renacimiento_del_general_que_siempre_se_ve_a_sí_mismo_como_un_sustituto',
  tags: 'bl china pendiente china-antigua comedia lucha-de-poder malentendidos matrimonio realeza renacimiento venganza',
  autor: 'yi-yi-yi-yi',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-the-general-who-always-sees-himself-as-a-replacement/',
  capitulos: '169 + 6 extras'
},

{
  novela_id: 84,
  titulo: 'El pequeño y dulce Fulang',
  ingles: 'The Sweet Little Fulang',
  original: '乖乖小夫郎',
  slug: 'El_pequeño_y_dulce_Fulang',
  tags: 'bl china pendiente china-antigua agricultura ger matrimonio-arreglado mpreg vida-diaria',
  autor: 'cha-chacha',
  link: 'https://www.novelupdates.com/series/the-sweet-little-fulang/',
  capitulos: '230'
},

{
  novela_id: 83,
  titulo: 'El pájaro Nie Bufan',
  ingles: 'Bird Dude Nie Bufan',
  original: '禽货聂不凡',
  slug: 'El_pájaro_Nie_Bufan',
  tags: 'bl china pendiente china-antigua harem mpreg novela-erotica sobrenatural transmigracion',
  autor: 'xueyuan-youling',
  link: 'https://www.novelupdates.com/series/bird-dude-nie-bufan/',
  capitulos: '113'
},

{
  novela_id: 82,
  titulo: 'El magnate culinario',
  ingles: 'The Culinary Tycoon',
  original: '种田之美食大亨',
  slug: 'El_magnate_culinario',
  tags: 'bl china pendiente china-antigua agricultura mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'fanchen-pian-ye',
  link: 'https://www.novelupdates.com/series/the-culinary-tycoon/',
  capitulos: '161 + 10 extras'
},

{
  novela_id: 81,
  titulo: 'El gran propietario',
  ingles: 'The Big Landlord',
  original: '大地主',
  slug: 'El_gran_propietario',
  tags: 'bl china pendiente china-antigua aristocracia matrimonio-arreglado r18 realeza transmigracion',
  autor: 'yin-ya',
  link: 'https://www.novelupdates.com/series/the-big-landlord/',
  capitulos: '435 + 9 extras'
},

{
  novela_id: 80,
  titulo: 'El emperador sumiso',
  ingles: 'The Submissive Emperor',
  original: '君为下',
  slug: 'El_emperador_sumiso',
  tags: 'bl china pendiente china-antigua comedia matrimonio-arreglado protagonista-gong realeza',
  autor: 'lu-ye-qian-he',
  link: 'https://www.novelupdates.com/series/the-submissive-emperor/comment-page-2/?pg=1&grr=1',
  capitulos: '99 + 4 extras'
},

{
  novela_id: 79,
  titulo: 'El camino del contraataque de carne de cañón',
  ingles: 'The Path of the Cannon Fodder’s Counterattack',
  original: '炮灰逆袭之路',
  slug: 'El_camino_del_contraataque_de_carne_de_cañón',
  tags: 'bl china pendiente china-antigua realeza renacimiento transportado-a-otro-mundo',
  autor: 'mao-niao',
  link: 'https://www.novelupdates.com/series/the-path-of-the-cannon-fodders-counterattack/',
  capitulos: '71'
},

{
  novela_id: 78,
  titulo: 'Diario de la esposa mimada del tirano',
  ingles: 'Tyrant Pampering Wife Diary',
  original: '暴君宠婚日常',
  slug: 'Diario_de_la_esposa_mimada_del_tirano',
  tags: 'bl china finalizado china-antigua comedia matrimonio mpreg realeza renacimiento venganza yandere',
  autor: 'yi-ri-zhi-qian',
  link: 'https://drive.google.com/drive/u/1/folders/1RDKjTTb7WcCTFXLwlVvvZCCCLkt6GGQa',
  capitulos: '79 + 1 extra'
},

{
  novela_id: 77,
  titulo: 'Después de que el Gong carne de cañon comenzara a cultivar, tuvo HE con el protagonista masculino frío',
  ingles: 'After Cannon Fodder Gong Started Farming, He Had HE With the Cold Male Protagonist',
  original: '炮灰攻种田后和高冷男主HE了（穿书）',
  slug: 'Después_de_que_el_Gong_carne_de_cañon_comenzara_a_cultivar,_tuvo_HE_con_el_protagonista_masculino_frío',
  tags: 'bl china pendiente china-antigua discapacidad mpreg protagonista-gong vida-diaria transmigracion',
  autor: 'dan-xueqing',
  link: 'https://www.novelupdates.com/series/after-cannon-fodder-gong-started-farming-he-had-he-with-the-cold-male-protagonist/',
  capitulos: '111 + 4 extras'
},

{
  novela_id: 76,
  titulo: 'Cariño especial',
  ingles: 'Special Fondness',
  original: '独钟',
  slug: 'Cariño_especial',
  tags: 'bl china pendiente china-antigua matrimonio-arreglado novela-erotica',
  autor: 'du-mao-cai',
  link: 'https://www.novelupdates.com/series/special-fondness/',
  capitulos: '26 + 5 extras'
},

{
  novela_id: 75,
  titulo: 'Mi cereza explotará en el Apocalipsis',
  ingles: 'My Cherry Will Explode in the Apocalypse',
  original: '末世之我的樱桃会爆炸',
  slug: 'Mi_cereza_explotará_en_el_Apocalipsis',
  tags: 'bl china pendiente apocalipsis renacimiento vida-diaria zombies',
  autor: 'yan-chu',
  link: 'https://www.novelupdates.com/series/my-cherry-will-explode-in-the-apocalypse/',
  capitulos: '112 + 1 extra'
},

{
  novela_id: 74,
  titulo: 'Esposa zombi número uno',
  ingles: 'Number One Zombie Wife',
  original: '第一尸妻',
  slug: 'Esposa_zombi_número_uno',
  tags: 'bl china pendiente apocalipsis amnesia comedia enemigos-a-amantes mpreg no-humano renacimiento sobrenatural transmigracion zombies',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/number-one-zombie-wife/',
  capitulos: '376'
},

{
  novela_id: 73,
  titulo: 'El renacimiento de los últimos días y el regreso de [Fang] Hao',
  ingles: 'The Rebirth of the Last Days and Return to [Fang] Hao',
  original: '末世重生之重归于郝',
  slug: 'El_renacimiento_de_los_últimos_días_y_el_regreso_de_[Fang]_Hao',
  tags: 'bl china pendiente apocalipsis protagonista-gong renacimiento vida-diaria zombies',
  autor: 'nuan-he',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-the-last-days-and-return-to-fang-hao/',
  capitulos: '200 + 1 extra'
},

{
  novela_id: 72,
  titulo: 'Después de cepillar la cara al jefe del Apocalipsis durante 363 días',
  ingles: 'After Brushing Face At The Apocalypse’s Boss For 363 Days',
  original: '在末世BOSS面前刷脸卡363天之后',
  slug: 'Después_de_cepillar_la_cara_al_jefe_del_Apocalipsis_durante_363_días',
  tags: 'bl china pendiente apocalipsis comedia inteligencia-artificial malentendidos no-humano transportado-a-otro-mundo zombies',
  autor: 'da-yuan-zi',
  link: 'https://www.novelupdates.com/series/after-brushing-face-at-the-apocalypses-boss-for-363-days/',
  capitulos: '97 + 1 extra'
},

{
  novela_id: 71,
  titulo: 'De vuelta al Apocalipsis: El renacimiento de Bai Jing',
  ingles: 'Back to the Apocalypse: The Rebirth of Bai Jing',
  original: '末世重生之少爺',
  slug: 'De_vuelta_al_Apocalipsis_El_renacimiento_de_Bai_Jing',
  tags: 'bl china pendiente apocalipsis protagonista-op r18 renacimiento vida-diaria yandere zombies',
  autor: 'ye-yo',
  link: 'https://www.novelupdates.com/series/back-to-the-apocalypse/',
  capitulos: '130 + 3 extras'
},

{
  novela_id: 70,
  titulo: 'Contraataque de un Loto Blanco que renació en un Apocalipsis',
  ingles: 'Counterattack of a White Lotus that was Reborn into an Apocalypse',
  original: '末世重生之白莲花的逆袭',
  slug: 'Contraataque_de_un_Loto_Blanco_que_renació_en_un_Apocalipsis',
  tags: 'bl china pendiente apocalipsis comedia cultivo malentendidos protagonista-gong sobrenatural transmigracion zombies',
  autor: 'suiyue-dadao-liu',
  link: 'https://www.novelupdates.com/series/counterattack-of-a-white-lotus-that-was-reborn-into-an-apocalypse/',
  capitulos: '79 + 3 extras'
},

{
  novela_id: 69,
  titulo: 'De vuelta al campo',
  ingles: 'Back to the Countryside',
  original: '归隐乡野',
  slug: 'De_vuelta_al_campo',
  tags: 'bl china finalizado china-antigua agricultura ger matrimonio mpreg protagonista-gong vida-diaria',
  autor: 'bei-ming-chi',
  link: 'https://drive.google.com/drive/u/4/folders/1eSU_oQRfmYBKDchkDlzfKZlAy24wmOyu',
  capitulos: '98'
},

{
  novela_id: 68,
  titulo: 'El segundo protagonista masculino enamorado no existe [Transmigración al libro]',
  ingles: 'The Infatuated Second Male Lead Doesn’t Exist [Transmigration into Book]',
  original: '痴情男二不存在的[穿书]',
  slug: 'El_segundo_protagonista_masculino_enamorado_no_existe_[Transmigración_al_libro]',
  tags: 'bl china finalizado moderno discapacidad drama industria-del-entretenimiento protagonista-gong transmigracion',
  autor: 'bei-ming-chi',
  link: 'https://drive.google.com/drive/u/4/folders/1cvdSERxyc98zbEzwwtvUTXXyf_ssShyT',
  capitulos: '88 + 2 extras'
},

{
  novela_id: 67,
  titulo: 'Cómo decir "Te amo"',
  ingles: 'How To Say I Love You',
  original: '爱你怎么说',
  slug: 'Cómo_decir_Te_amo',
  tags: 'bl china finalizado moderno drama industria-del-entretenimiento r18',
  autor: 'feng-liu-shu-dai',
  link: 'https://drive.google.com/drive/u/4/folders/1Z_DrP3bBM74J2Jv54MdGwt0XWtN0SkA7',
  capitulos: '136 + 1 extra'
},

{
  novela_id: 66,
  titulo: 'El PNJ de la novela abusiva se está relajando [Transmigración rápida]',
  ingles: 'The NPC in the Abusive Novel is Slacking Off [Quick Transmigration]',
  original: '虐主文的NPC消极怠工了 [快穿]',
  slug: 'El_PNJ_de_la_novela_abusiva_se_está_relajando_[Transmigración_rápida]',
  tags: 'bl china en-proceso multiples-mundos inteligencia-artificial matrimonio multiples-protagonistas no-humano omegaverse protagonista-gong realeza sistema transmigracion zerg',
  autor: 'Wo-suan-shenme-xiao-binggan',
  link: 'https://drive.google.com/drive/u/4/folders/1fgpUyq6OhXea3G40AJz0s9maYq6d4vmH',
  capitulos: '408'
},

{
  novela_id: 65,
  titulo: 'Después de que los maridos gemelos intercambiaron sus vidas',
  ingles: 'After the Twin Husbands Swapped Lives',
  original: '双生夫郎互换人生后',
  slug: 'Después_de_que_los_maridos_gemelos_intercambiaron_sus_vidas',
  tags: 'bl china en-proceso china-antigua agricultura ger matrimonio-arreglado mpreg vida-diaria',
  autor: 'yu-chun',
  link: 'https://drive.google.com/drive/u/4/folders/1hV4WxOGqw-HxSgTX-WebDvIF6eKepRVi',
  capitulos: '203 + 64 extras'
},

{
  novela_id: 64,
  titulo: 'Sobre las mil posturas reconstruidas por los canallas',
  ingles: 'On the Thousand Postures Reconstructed by the Scumbags',
  original: '论渣男改造的一千种姿势',
  slug: 'Sobre_las_mil_posturas_reconstruidas_por_los_canallas',
  tags: 'bl china mtl multiples-mundos comedia no-humano protagonista-gong sistema transmigracion',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/19u33SrGF4YNumqoBM0DrHI3n3agbyr8f',
  capitulos: '263'
},

{
  novela_id: 63,
  titulo: 'El rescate del trágico villano está en progreso',
  ingles: 'The Rescue Of The Tragic Villain Is In Progress',
  original: '拯救悲情反派进行时！',
  slug: 'El_rescate_del_trágico_villano_está_en_progreso',
  tags: 'bl china en-proceso multiples-mundos comedia discapacidad ger inteligencia-artificial lucha-de-poder multiples-protagonistas no-humano sistema transmigracion zerg',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1cDMUww0vX0FpzdgiUdLFiHxpX2ipZZSH',
  capitulos: '287'
},

{
  novela_id: 62,
  titulo: 'En el futuro, todo mi cuerpo es un tesoro',
  ingles: 'In the Future, My Whole Body is a Treasure',
  original: '未来之全身是宝',
  slug: 'En_el_futuro,_todo_mi_cuerpo_es_un_tesoro',
  tags: 'bl china finalizado futurista bestia-humanizada comedia cultivo matrimonio-arreglado mpreg ninos no-humano shota transportado-a-otro-mundo',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/19r49bH2_LKRPSR88XdyAPm5-YFFIsyHa',
  capitulos: '120 + 4 extras'
},

{
  novela_id: 61,
  titulo: 'Un nido de serpientes dentro de una tumba antigua',
  ingles: 'A Nest of Snakes Inside an Old Tomb',
  original: '天敌饲养指南',
  slug: 'Un_nido_de_serpientes_dentro_de_una_tumba_antigua',
  tags: 'bl china finalizado fantasia animales comedia mpreg no-humano reencarnacion',
  autor: 'gu-zhong-ran',
  link: 'https://drive.google.com/drive/u/4/folders/1Zc03hDMnivNaPoL0ajZcvXWosQmJZdJl',
  capitulos: '115 + 3 extras'
},

{
  novela_id: 60,
  titulo: 'Xiao Jiu',
  ingles: 'Xiao Jiu',
  original: '小九',
  slug: 'Xiao_Jiu',
  tags: 'bl china finalizado china-antigua malentendidos matrimonio realeza novela-erotica',
  autor: 'xu-banxian',
  link: 'https://drive.google.com/drive/u/4/folders/1qaVTt-B19U3Bp0zV9F_b7SUbJfVEgtPm',
  capitulos: '25 + 1 extra'
},

{
  novela_id: 59,
  titulo: 'Vengo de lejos entre los Zerg',
  ingles: 'I Come from Afar Within the Zerg',
  original: '虫族之我来自远方',
  slug: 'Vengo_de_lejos_entre_los_Zerg',
  tags: 'bl china finalizado futurista aristocracia multiples-protagonistas protagonista-gong realeza transportado-a-otro-mundo zerg',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1S1lA-ryJqQ7cjxJF5N95OGn8jzl4nRvC',
  capitulos: '229 + 4 extras'
},

{
  novela_id: 58,
  titulo: 'Usa rápidamente la cara del diablo',
  ingles: 'Quickly Wear the Face of the Devil',
  original: '快穿之打脸狂魔',
  slug: 'Usa_rápidamente_la_cara_del_diablo',
  tags: 'bl china finalizado multiples-mundos drama protagonista-op novela-erotica transmigracion venganza yandere',
  autor: 'feng-liu-shu-dai',
  link: 'https://drive.google.com/drive/u/4/folders/19baWW1tZ1JMTG3Pe1o7b9bPl84qON2fr',
  capitulos: '259'
},

{
  novela_id: 57,
  titulo: 'Una guía para criar a tu enemigo natural',
  ingles: 'A Guide to Raising Your Natural Enemy',
  original: '天敌饲养指南',
  slug: 'Una_guía_para_criar_a_tu_enemigo_natural',
  tags: 'bl china finalizado futurista bestia-humanizada comedia cultivo hombre-bestia maestro-discipulo matrimonio mpreg ninos transportado-a-otro-mundo',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1U3EeONqRhclwzLUFmsB2v6gLpi98ijdx',
  capitulos: '130'
},

{
  novela_id: 56,
  titulo: 'Transmigrado en el esposo de un herrero',
  ingles: 'Transmigrated into a Blacksmith’s Husband',
  original: '穿成铁匠夫郎',
  slug: 'Transmigrado_en_el_esposo_de_un_herrero',
  tags: 'bl china finalizado china-antigua agricultura ger matrimonio-arreglado mpreg vida-diaria transmigracion',
  autor: 'yao-zhi',
  link: 'https://drive.google.com/drive/u/4/folders/1qmHQP4TubAuT7yOpr-U3-OxwbyeDJoj6',
  capitulos: '60'
},

{
  novela_id: 55,
  titulo: 'Todo el mundo sabe que soy una buena persona',
  ingles: 'Everyone Knows I’m a Good Person',
  original: '全世界都知道我是好人[快穿]',
  slug: 'Todo_el_mundo_sabe_que_soy_una_buena_persona',
  tags: 'bl china finalizado multiples-mundos amnesia comedia inteligencia-artificial no-humano protagonista-op sistema transmigracion',
  autor: 'tang-wei-shuai',
  link: 'https://drive.google.com/drive/u/4/folders/1_WUmbzz6b95PefD9DIjGeP2zPw9yN52v',
  capitulos: '176 + 1 extra'
},

{
  novela_id: 54,
  titulo: 'Te veo',
  ingles: 'I See You',
  original: '看见你了',
  slug: 'Te_veo',
  tags: 'bl china finalizado china-antigua discapacidad malentendidos matrimonio-arreglado',
  autor: 'gujin',
  link: 'https://drive.google.com/drive/u/4/folders/1HJxe1kjFjDotc0N5ExOpZaoYZr8ePczz',
  capitulos: '15'
},

{
  novela_id: 53,
  titulo: 'Siete días como villano',
  ingles: 'Seven Days as a Villain',
  original: '悪役令息の7日間',
  slug: 'Siete_días_como_villano',
  tags: 'bl japon finalizado europa-antigua aristocracia r18 reencarnacion',
  autor: 'rirakkusu@piro',
  link: 'https://drive.google.com/drive/u/4/folders/1JiwsoPUOamXVMn7drL8T_ph-gfFIpM-1',
  capitulos: '7 + exta'
},

{
  novela_id: 52,
  titulo: 'Renacimiento del pequeño lobo Shou de pantalones de seda',
  ingles: 'Rebirth of the Wolfish Silkpants Bottom',
  original: '重生之纨袴小狼受',
  slug: 'Renacimiento_del_pequeño_lobo_Shou_de_pantalones_de_seda',
  tags: 'bl china finalizado moderno drama r18 renacimiento shota vida-diaria venganza',
  autor: 'xiangchang-jun',
  link: 'https://drive.google.com/drive/u/4/folders/12npI2_1TZZ54wWHKRtv_UOyss9R11i6L',
  capitulos: '151 + 2 extras'
},

{
  novela_id: 51,
  titulo: 'Renacimiento de una estrella de cine',
  ingles: 'Rebirth of a Movie Star',
  original: '重生之朗朗星空',
  slug: 'Renacimiento_de_una_estrella_de_cine',
  tags: 'bl china finalizado moderno drama industria-del-entretenimiento ninos renacimiento vida-diaria',
  autor: 'j112233',
  link: 'https://drive.google.com/drive/u/4/folders/1tHhEvjY1MzMTYrdlChtzYGNPZtQhj4DW',
  capitulos: '61 + 6 extras'
},

{
  novela_id: 50,
  titulo: 'Renacer como un sistema',
  ingles: 'Reborn As a System',
  original: '重生成系统',
  slug: 'Renacer_como_un_sistema',
  tags: 'bl china finalizado multiples-mundos no-humano r18 renacimiento sistema novela-erotica transmigracion yandere',
  autor: 'your-glory',
  link: 'https://drive.google.com/drive/u/4/folders/1omYjIaudPKQucuihTgjFGvt9L96a_PZT',
  capitulos: '103 + 2 extras'
},

{
  novela_id: 49,
  titulo: '¡Realmente soy un Shou escoria!',
  ingles: 'I Really Am a Slag Shou!',
  original: '我真的是渣受',
  slug: 'Realmente_soy_un_Shou_escoria',
  tags: 'bl china finalizado multiples-mundos comedia sistema transmigracion yandere',
  autor: 'your-glory',
  link: 'https://drive.google.com/drive/u/4/folders/1y5C5GUJj1bAwebaUyNaSmr09QdpWRNv3',
  capitulos: '181'
},

{
  novela_id: 48,
  titulo: 'Querido esposo',
  ingles: 'Beloved Husband',
  original: '宠夫（快穿）',
  slug: 'Querido_esposo',
  tags: 'bl china finalizado multiples-mundos amnesia comedia protagonista-gong protagonista-op vida-diaria',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1N_FUeIf1eRokBG5uHJ2x6IOOdO2hFhbE',
  capitulos: '257'
},

{
  novela_id: 47,
  titulo: '¿Por qué los protagonistas Gong y Shou pelean por mí?',
  ingles: 'Why are the Protagonist Gong and Shou Fighting Because of Me?',
  original: '主角攻受怎么为我打起来了',
  slug: 'Por_qué_los_protagonistas_Gong_y_Shou_pelean_por_mí',
  tags: 'bl china finalizado futurista comedia ger malentendidos omegaverse',
  autor: 'tian-huafang',
  link: 'https://drive.google.com/drive/u/4/folders/1hTuxgDRCCfw7a0wpuSD6MCBI3o7C36m0',
  capitulos: '134 + 15 extras'
},

{
  novela_id: 46,
  titulo: 'Por el bien de su pareja, incluso este villano puede cambiar de rol',
  ingles: 'For the Sake of His Partner, Even This Villain Can Change Roles',
  original: '为了伴侣，这个反派也可以不当',
  slug: 'Por_el_bien_de_su_pareja,_incluso_este_villano_puede_cambiar_de_rol',
  tags: 'bl china finalizado multiples-mundos multiples-protagonistas no-humano sobrenatural transmigracion',
  autor: 'zhao-yexi',
  link: 'https://drive.google.com/drive/u/4/folders/15lRDAruf9ESJjxZeDVemS-RkxO2RSMxL',
  capitulos: '244'
},

{
  novela_id: 45,
  titulo: 'Pequeño tonto',
  ingles: 'Little Fool',
  original: '小呆子(H)',
  slug: 'Pequeño_tonto',
  tags: 'bl china finalizado china-antigua discapacidad ger matrimonio novela-erotica',
  autor: 'xiaoshi-nan-ji',
  link: 'https://drive.google.com/drive/u/4/folders/1f1bTd0tsNmKdJ_M-KVqQ0PuxGfttIwNJ',
  capitulos: '10 + 11 extras'
},

{
  novela_id: 44,
  titulo: 'Omega tonto atado al sistema de rebobinado',
  ingles: 'Foolish Omega Bound to the Rewind System',
  original: '笨蛋omega綁定回檔係統',
  slug: 'Omega_tonto_atado_al_sistema_de_rebobinado',
  tags: 'bl china finalizado moderno comedia omegaverse sistema vida-diaria transmigracion',
  autor: 'mao-qiu-qiu',
  link: 'https://drive.google.com/drive/u/4/folders/1w5n48SLBsFRHAzIt_v_QYdi5iqT0U5Lr',
  capitulos: '85 + 9 extras + 3 bonos'
},

{
  novela_id: 43,
  titulo: 'Obligado a casarse con una placa conmemorativa',
  ingles: 'Forced to Marry a Memorial Tablet',
  original: '被迫嫁給牌位後',
  slug: 'Obligado_a_casarse_con_una_placa_conmemorativa',
  tags: 'bl china finalizado china-antigua agricultura malentendidos matrimonio-arreglado mpreg ninos sobrenatural wuxia',
  autor: 'lin-qin-ren',
  link: 'https://drive.google.com/drive/u/4/folders/1Q_h00CGFemYSok8L3OrXa2gUuHj1JkNU',
  capitulos: '60 + 5 extras'
},

{
  novela_id: 42,
  titulo: '¿No te gusto?',
  ingles: 'Don’t You Like Me',
  original: '你是不是喜欢我',
  slug: 'No_te_gusto',
  tags: 'bl china finalizado moderno comedia malentendidos vida-escolar sobrenatural',
  autor: 'lu-tianyi',
  link: 'https://drive.google.com/drive/u/4/folders/197sDfbOt_HRJ7jsnqwhRDh9XlTnxG7Uu',
  capitulos: '80 + 18 extras'
},

{
  novela_id: 41,
  titulo: 'No soy humano',
  ingles: 'I’m Not Human',
  original: '我不做人了',
  slug: 'No_soy_humano',
  tags: 'bl china finalizado futurista comedia no-humano protagonista-op reencarnacion vida-diaria zerg',
  autor: 'jiuyi',
  link: 'https://drive.google.com/drive/u/4/folders/1PBu_SoysVWM0j_TdNQ4RbwUWugjuJKBJ',
  capitulos: '87 + 8 extras'
},

{
  novela_id: 40,
  titulo: 'No seas un hombre mantenido',
  ingles: 'Don’t Be a Kept Man',
  original: '不做软饭男',
  slug: 'No_seas_un_hombre_mantenido',
  tags: 'bl china finalizado multiples-mundos multiples-protagonistas protagonista-gong renacimiento sistema transmigracion',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1C882M7jTKE5MdNPh6He1tNBkkDdST4fL',
  capitulos: '186 + 5 extras'
},

{
  novela_id: 39,
  titulo: 'Mi marido varonil favorito',
  ingles: 'My Favorite Manly Husband',
  original: '恶霸的娇夫郎',
  slug: 'Mi_marido_varonil_favorito',
  tags: 'bl china finalizado china-antigua agricultura amnesia aristocracia ger matrimonio mpreg transmigracion',
  autor: 'ri-li-feng-he',
  link: 'https://drive.google.com/drive/u/4/folders/1uOQM3ynCQeWyuPbjSJxk_KH2fYR_8XLN',
  capitulos: '103 + 12 extras'
},

{
  novela_id: 38,
  titulo: 'Mi marido lobo',
  ingles: 'My Wolf Husband',
  original: '狼相公',
  slug: 'Mi_marido_lobo',
  tags: 'bl china finalizado china-antigua bestia-humanizada ger mpreg no-humano transmigracion',
  autor: 'wushan-you-duan-yun',
  link: 'https://drive.google.com/drive/u/4/folders/1g1yvmwd8aYF2Jbu9j2MHRwmn-Kel6iUQ',
  capitulos: '89 + 10 extras'
},

{
  novela_id: 37,
  titulo: 'Marido, déjame tocar tus abdominales',
  ingles: 'Husband, Let Me Touch Your Abs',
  original: '夫君，給我摸摸腹肌',
  slug: 'Marido,_déjame_tocar_tus_abdominales',
  tags: 'bl china finalizado china-antigua agricultura ger mpreg ninos r18 vida-diaria transmigracion',
  autor: '998',
  link: 'https://drive.google.com/drive/u/4/folders/1N6RtIcB2OIfxnWFZiyPDu9736KQEtsKL',
  capitulos: '150 + 49 extras'
},

{
  novela_id: 36,
  titulo: 'Marca accidental',
  ingles: 'Accidental Mark',
  original: '意外标记',
  slug: 'Marca_accidental',
  tags: 'bl china finalizado moderno comedia industria-del-entretenimiento omegaverse protagonista-gong sistema vida-diaria transmigracion',
  autor: 'die-zhiling',
  link: 'https://drive.google.com/drive/u/4/folders/10rYXUKKiqRciwxnl7NFIGkE1ME9Fcd6Y',
  capitulos: '84 + 11 extras'
},

{
  novela_id: 35,
  titulo: 'La esposa es primero',
  ingles: 'The Wife is First',
  original: '妻为上',
  slug: 'La_esposa_es_primero',
  tags: 'bl china finalizado china-antigua matrimonio-arreglado protagonista-gong realeza renacimiento novela-erotica venganza',
  autor: 'lu-ye-qian-he',
  link: 'https://drive.google.com/drive/u/4/folders/1L7XbAHqtGv2cB9IoRcBtUIGZLzFCevxA',
  capitulos: '105 + 3 extras'
},

{
  novela_id: 34,
  titulo: 'La esposa del Legendario Maestro',
  ingles: 'The Legendary Master’s Wife',
  original: '傳說之主的夫人',
  slug: 'La_esposa_del_Legendario_Maestro',
  tags: 'bl china finalizado cultivacion bestia-humanizada cultivo no-humano transmigracion xuanhuan',
  autor: 'yin-ya',
  link: 'https://drive.google.com/drive/u/4/folders/1BXkFDqJphEwoFNN0Ou5guBDeRxNF907q',
  capitulos: '713 + 18 extras'
},

{
  novela_id: 33,
  titulo: 'La breve historia de ShaoWang',
  ingles: 'The Short Story of ShaoWang',
  original: '少汪几句',
  slug: 'La_breve_historia_de_ShaoWang',
  tags: 'bl china finalizado moderno comedia mpreg omegaverse r18',
  autor: 'bing-kuai-er',
  link: 'https://drive.google.com/drive/u/4/folders/1GBeSSCyUz9PNrvV4xOAE9LeVpJ-VwJni',
  capitulos: '58 + 12 extras'
},

{
  novela_id: 32,
  titulo: 'La belleza enferma se casa con un ciudadano que transmigró en un libro',
  ingles: 'The Sick Beauty Marries a Fellow Townsman Who Transmigrated into a Book',
  original: '病美人嫁给穿书同乡后',
  slug: 'La_belleza_enferma_se_casa_con_un_ciudadano_que_transmigró_en_un_libro',
  tags: 'bl china finalizado china-antigua comedia lucha-de-poder malentendidos matrimonio-arreglado punto-de-vista-multiple realeza vida-diaria transmigracion venganza',
  autor: 'zeda',
  link: 'https://drive.google.com/drive/u/4/folders/1Ddjo3SFV5cjp5LfKivaiMBMeDPblpvrR',
  capitulos: '81 + 4 extras'
},

{
  novela_id: 31,
  titulo: 'La emperatriz amada del tirano',
  ingles: 'The Tyrant’s Beloved Empress',
  original: '暴君的宠后[重生]',
  slug: 'La_emperatriz_amada_del_tirano',
  tags: 'bl china finalizado china-antigua lucha-de-poder matrimonio-arreglado mpreg r18 renacimiento',
  autor: 'xiu-sheng',
  link: 'https://drive.google.com/drive/u/4/folders/10H0m0hO_22ah9NK-n26xUw0rjqBvP6Bm',
  capitulos: '135 + 3 extras'
},

{
  novela_id: 30,
  titulo: 'Juego Cargando',
  ingles: 'Game Loading',
  original: '游戏加载中',
  slug: 'Juego_Cargando',
  tags: 'bl china finalizado multiples-mundos comedia transmigracion yandere',
  autor: 'long-qi',
  link: 'https://drive.google.com/drive/u/4/folders/13g6RDpxcL4R3hWTVZiqNgs8-RgImOhKh',
  capitulos: '304 + 5 extras'
},

{
  novela_id: 29,
  titulo: 'Hogar de los zerg',
  ingles: 'Home of the Zerg',
  original: '蟲族之歸家',
  slug: 'Hogar_de_los_zerg',
  tags: 'bl china finalizado futurista matrimonio mpreg ninos no-humano novela-erotica protagonista-gong vida-diaria transmigracion zerg',
  autor: 'heng-heng',
  link: 'https://drive.google.com/drive/u/4/folders/1Np_fp34kMWUeoIblm0rmvWmFV6GC6KcX',
  capitulos: '45 + 12 extras'
},

{
  novela_id: 28,
  titulo: 'Gallo x gallo',
  ingles: 'Rooster X Rooster',
  original: '鸡夫夫 (ABO)',
  slug: 'Gallo_x_gallo',
  tags: 'bl china finalizado china-antigua animales comedia mpreg no-humano omegaverse novela-erotica',
  autor: 'tian-mu-you',
  link: 'https://drive.google.com/drive/u/4/folders/1lRvvNW4mQjMtaiF3hkvkCsR5Hk1svF0I',
  capitulos: '5 + 1 extra'
},

{
  novela_id: 27,
  titulo: 'Especies raras interestelares',
  ingles: 'Interstellar Rare Species',
  original: '星际稀有物种',
  slug: 'Especies_raras_interestelares',
  tags: 'bl china finalizado futurista discapacidad hombre-bestia matrimonio mpreg transportado-a-otro-mundo',
  autor: 'hanmen-yatou',
  link: 'https://drive.google.com/drive/u/4/folders/13ku_FokV0XO575-XfopxFE7vDACoRSj5',
  capitulos: '76 + 3 extras'
},

{
  novela_id: 26,
  titulo: 'Enamorado',
  ingles: 'In Love',
  original: '钟情 (快穿)',
  slug: 'Enamorado',
  tags: 'bl china finalizado multiples-mundos amnesia comedia hombre-bestia industria-del-entretenimiento omegaverse protagonista-gong',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1Z29lrxIhS22-pY3kdKv2GrCsTvxH9F0S',
  capitulos: '195'
},

{
  novela_id: 25,
  titulo: 'El único marido feo favorito',
  ingles: 'The Only Favourite Ugly Husband',
  original: '独宠丑夫',
  slug: 'El_único_marido_feo_favorito',
  tags: 'bl china finalizado china-antigua agricultura ger matrimonio ninos protagonista-gong vida-diaria',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1OvnvHyK7yQpTu6_vDnC4i1IWkpNtlohl',
  capitulos: '180'
},

{
  novela_id: 24,
  titulo: 'El tonto gong renació',
  ingles: 'The Foolish Gong was Reborn',
  original: '沙雕攻他重生了',
  slug: 'El_tonto_gong_renació',
  tags: 'bl china finalizado moderno comedia matrimonio protagonista-gong renacimiento vida-escolar',
  autor: 'duo-jin-shaonu-mao',
  link: 'https://drive.google.com/drive/u/4/folders/1MkRt4bdx6oYvIjiiOKiUaPD-J8w7zrzM',
  capitulos: '119 + 7 extras'
},

{
  novela_id: 23,
  titulo: 'El rico y honorable ChangAn',
  ingles: 'The Rich And Honorable ChangAn',
  original: '富贵长安',
  slug: 'El_rico_y_honorable_ChangAn',
  tags: 'bl china finalizado china-antigua drama lucha-de-poder matrimonio-arreglado mpreg realeza',
  autor: 'wu-duo-yun',
  link: 'https://drive.google.com/drive/u/4/folders/1nM3-hkKg3yw7yvjFQwf2ETxV7U9TFd4u',
  capitulos: '79 + 1 extra'
},

{
  novela_id: 22,
  titulo: 'El rascador divino del gato blanco',
  ingles: 'The White Cat’s Divine Scratching Post',
  original: '神木挠不尽',
  slug: 'El_rascador_divino_del_gato_blanco',
  tags: 'bl china finalizado cultivacion bestia-humanizada comedia cultivo maestro-discipulo mascotas no-humano protagonista-gong r18 transmigracion xianxia yandere',
  autor: 'lu-ye-qian-he',
  link: 'https://drive.google.com/drive/u/4/folders/1VUM7dNvO5VeJn_Z824fTJxdVGbDOE6CR',
  capitulos: '126 + 5 extras'
},

{
  novela_id: 21,
  titulo: 'El pez mascota predilecto del tirano discapacitado',
  ingles: 'The Disabled Tyrant’s Beloved Pet Fish',
  original: '残疾暴君的掌心鱼宠[穿书]',
  slug: 'El_pez_mascota_predilecto_del_tirano_discapacitado',
  tags: 'bl china finalizado china-antigua bestia-humanizada comedia discapacidad lucha-de-poder mascotas matrimonio mpreg ninos no-humano realeza sistema transformacion-animal transmigracion',
  autor: 'xue-shan-fei-hu',
  link: 'https://drive.google.com/drive/u/4/folders/1nA6cgtLV78sHemShM8oLYfwRx9XGR0gZ',
  capitulos: '156'
},

{
  novela_id: 20,
  titulo: 'El pervertido y el yandere',
  ingles: 'The Pervert and the Yandere',
  original: '变态与病娇 (主攻)',
  slug: 'El_pervertido_y_el_yandere',
  tags: 'bl china finalizado moderno protagonista-gong novela-erotica transportado-a-otro-mundo yandere',
  autor: 'heng-heng',
  link: 'https://drive.google.com/drive/u/4/folders/1Sf-PUYwpYYGVycWLGrhWmXbYbkzNb66L',
  capitulos: '13'
},

{
  novela_id: 19,
  titulo: 'El mayordomo demonio sigue motivado hoy',
  ingles: 'The Demon Butler Is Still Motivated Today',
  original: '恶魔管家今天依旧励志',
  slug: 'El_mayordomo_demonio_sigue_motivado_hoy',
  tags: 'bl china finalizado futurista no-humano sistema transportado-a-otro-mundo',
  autor: 'daozhang-danfei',
  link: 'https://drive.google.com/drive/u/4/folders/19sB8kUcXy9o0lLYnK9AVjEfqu_XiEWgG',
  capitulos: '102 + 4 extras'
},

{
  novela_id: 18,
  titulo: 'El lector y el protagonista definitivamente tienen que estar en un amor verdadero',
  ingles: 'The Reader and Protagonist Definitely Have to Be in True Love',
  original: '读者和主角绝逼是真爱',
  slug: 'El_lector_y_el_protagonista_definitivamente_tienen_que_estar_en_un_amor_verdadero',
  tags: 'bl china finalizado fantasia comedia discapacidad hibrido novela-erotica transportado-a-otro-mundo yandere',
  autor: 'tui',
  link: 'https://drive.google.com/drive/u/4/folders/1NL9uB9ycejHqiZJGZQ4_ezvGIYC0G65U',
  capitulos: '93 + 3 extras'
},

{
  novela_id: 17,
  titulo: 'El héroe helado anhela el amor',
  ingles: 'The Icy Hero is Yearning for Love',
  original: '氷の勇者は恋に泣く',
  slug: 'El_héroe_helado_anhela_el_amor',
  tags: 'bl china finalizado europa-antigua drama punto-de-vista-multiple reencarnacion novela-erotica yandere',
  autor: 'momose-wasabi',
  link: 'https://drive.google.com/drive/u/4/folders/1iG5kNbFeT8Ml1Fr4Mt-h1Ypbzro-TqXX',
  capitulos: '13 + 7 extras'
},

{
  novela_id: 16,
  titulo: '¡El guion no es así!',
  ingles: 'The Script is Not Like This!',
  original: '剧本不是这样的',
  slug: 'El_guion_no_es_así',
  tags: 'bl china finalizado multiples-mundos comedia protagonista-gong novela-erotica transmigracion',
  autor: 'ziwuyueyuan',
  link: 'https://drive.google.com/drive/u/4/folders/1B6NM5-1B1Junnr5qyUxuq2jHieYwJyPG',
  capitulos: '19'
},

{
  novela_id: 15,
  titulo: 'El gato domesticado del emperador zombi',
  ingles: 'The Zombie Emperor’s Domesticated Cat',
  original: '丧尸皇的家养猫',
  slug: 'El_gato_domesticado_del_emperador_zombi',
  tags: 'bl china finalizado apocalipsis bestia-humanizada cultivo mascotas no-humano reencarnacion sobrenatural transformacion-animal zombies',
  autor: 'shuishan',
  link: 'https://drive.google.com/drive/u/4/folders/1xS1P0fKoxmsGdgFDHn6uKq5T3afCEDKU',
  capitulos: '95 + 2 extras'
},

{
  novela_id: 14,
  titulo: 'El Dragón y la "Princesa"',
  ingles: 'The Dragon and the "Princess"',
  original: '龙与"公主"',
  slug: 'El_Dragón_y_la_Princesa',
  tags: 'bl china finalizado europa-antigua bestia-humanizada gender-bender mpreg no-humano novela-erotica realeza',
  autor: 'some-wailing',
  link: 'https://drive.google.com/drive/u/4/folders/1V3YQazpGXUbK3WJW7lsozuzaxbwKQmj1',
  capitulos: '10'
},

{
  novela_id: 13,
  titulo: 'El código de práctica del Otaku Renacido para el Apocalipsis',
  ingles: 'The Reborn Otaku’s Code of Practice for the Apocalypse',
  original: '重生宅男的末世守則',
  slug: 'El_código_de_práctica_del_Otaku_Renacido_para_el_Apocalipsis',
  tags: 'bl china finalizado apocalipsis agricultura comedia renacimiento vida-diaria zombies',
  autor: 'warm-charge',
  link: 'https://drive.google.com/drive/u/4/folders/1EGLuxZ8TRZ_QUkUke-r6oGunvcR-BySv',
  capitulos: '259'
},

{
  novela_id: 12,
  titulo: 'El amante leal del príncipe',
  ingles: 'The Prince’s Loyal Lover',
  original: '王爷的忠犬攻',
  slug: 'El_amante_leal_del_príncipe',
  tags: 'bl china finalizado china-antigua comedia realeza transmigracion',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1RoLYsMM1ZqwcoVmCoq5b4BQsvZADEjFS',
  capitulos: '5 + 1 extra'
},

{
  novela_id: 11,
  titulo: 'Diario de crianza del esposo de la Edad de Piedra',
  ingles: 'Stone Age Husband Raising Journal',
  original: '史前养夫记',
  slug: 'Diario_de_crianza_del_esposo_de_la_Edad_de_Piedra',
  tags: 'bl china finalizado tribal agricultura comedia compromiso-roto cultivo hombre-bestia protagonista-gong vida-diaria transmigracion',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/18e32PD6y8n3MGWF75hzZbxpSpdiCEScK',
  capitulos: '161 + 20 extras'
},

{
  novela_id: 10,
  titulo: 'Desterrado a otro mundo',
  ingles: 'Banished to Another World',
  original: '异世流放',
  slug: 'Desterrado_a_otro_mundo',
  tags: 'bl china finalizado tribal abuso agricultura enemigos-a-amantes mpreg ninos sistema transmigracion',
  autor: 'yi-ren-bei',
  link: 'https://drive.google.com/drive/u/4/folders/1rlQo7n5z-7U2iqRDwA3W9XTn44oqtx0m',
  capitulos: '649 + 10 extras'
},

{
  novela_id: 9,
  titulo: 'Después de ser obligado a casarse con el malvado general',
  ingles: 'After Being Forced to Marry the Evil Star General',
  original: '被迫嫁给煞星将军后',
  slug: 'Después_de_ser_obligado_a_casarse_con_el_malvado_general',
  tags: 'bl china finalizado china-antigua comedia drama lucha-de-poder matrimonio-arreglado',
  autor: 'gu-sanyue',
  link: 'https://drive.google.com/drive/u/4/folders/18089PCokjfiFSJbsImYbLAYYLxU-qhWp',
  capitulos: '92 + 13 extras'
},

{
  novela_id: 8,
  titulo: 'Después de que el dios discapacitado de la guerra se convirtió en mi concubina',
  ingles: 'After the Disabled God of War Became My Concubine',
  original: '残疾战神嫁我为妾后',
  slug: 'Después_de_que_el_dios_discapacitado_de_la_guerra_se_convirtió_en_mi_concubina',
  tags: 'bl china finalizado china-antigua discapacidad drama lucha-de-poder malentendidos matrimonio-arreglado realeza transmigracion',
  autor: 'liu-gou-hua',
  link: 'https://drive.google.com/drive/u/4/folders/1e2XTCvDgBeQtGVkfJ14f_GpAmot3daHd',
  capitulos: '123 + 13 extras'
},

{
  novela_id: 7,
  titulo: 'Después de engañar a Shizun para que practicara el cultivo dual, me escapé con su bollo',
  ingles: 'After Deceiving Shizun into Dual Cultivating, I Ran Away With His Bun',
  original: '欺骗师尊后带球跑了',
  slug: 'Después_de_engañar_a_Shizun_para_que_practicara_el_cultivo_dual,_me_escapé_con_su_bollo',
  tags: 'bl china finalizado cultivacion comedia cultivo mpreg ninos sistema transmigracion xianxia',
  autor: 'gongzi-rou',
  link: 'https://drive.google.com/drive/u/4/folders/1Kra26k154tOZ5Jw6cCwiglzgh5nAg-lT',
  capitulos: '73 + 3 extras'
},

{
  novela_id: 6,
  titulo: '¡¡¡Yo, vuestro Emperador, he sido agraviado!!!',
  ingles: 'I, Your Emperor, Have Been Wronged!!!!!!',
  original: '朕委屈！！！！！！！',
  slug: 'Yo,_vuestro_Emperador,_he_sido_agraviado',
  tags: 'bl china finalizado china-antigua comedia realeza reencarnacion sistema transmigracion',
  autor: 'pu-zuoyou',
  link: 'https://drive.google.com/drive/u/4/folders/1dVq6nIn16AAhGVmtMZ7rKuI-CzQ8MXwf',
  capitulos: '67 + 16 extras'
},

{
  novela_id: 5,
  titulo: 'Asociación de crianza de cachorros',
  ingles: 'Cub Raising Association',
  original: '幼崽护养协会',
  slug: 'Asociación_de_crianza_de_cachorros',
  tags: 'bl china finalizado futurista ninos no-humano transportado-a-otro-mundo',
  autor: 'jiuyi',
  link: 'https://drive.google.com/drive/u/4/folders/1oaV3wT844Lb5_m7D-2IG7Br_0iOxVT91',
  capitulos: '130'
},

{
  novela_id: 4,
  titulo: 'Amante de papel',
  ingles: 'Paper Lover',
  original: '纸片恋人',
  slug: 'Amante_de_papel',
  tags: 'bl china finalizado moderno amnesia comedia inteligencia-artificial protagonista-gong vida-diaria',
  autor: 'chu-hanyi-qing',
  link: 'https://drive.google.com/drive/u/4/folders/1I4vkkGOZnE46V5141G7rpUIkXFlgjlcr',
  capitulos: '119 + 6 extras'
},

{
  novela_id: 3,
  titulo: 'Después de convertirse en el demonio interior del protagonista',
  ingles: 'After Becoming the Protagonist’s Inner Demon',
  original: '穿成主角的心魔之后',
  slug: 'Después_de_convertirse_en_el_demonio_interior_del_protagonista',
  tags: 'bl china finalizado cultivacion cultivo enemigos-a-amantes sistema transmigracion venganza xianxia yandere',
  autor: 'zeda',
  link: 'https://drive.google.com/drive/u/4/folders/1Herz-J4fyzDXFYhJsl1nwC_5krrYv8n8',
  capitulos: '123 + 2 extras'
},

{
  novela_id: 2,
  titulo: 'Aferrándome a mi hombre',
  ingles: 'Holding Onto My Man',
  original: '抱住我的男人[快穿]',
  slug: 'Aferrándome_a_mi_hombre',
  tags: 'bl china finalizado multiples-mundos amnesia cultivo no-humano drama yandere',
  autor: 'hong-yao-yao',
  link: 'https://drive.google.com/drive/u/4/folders/1_-J1je9S0GNwaMTu89A3sT4LK3iqmVHu',
  capitulos: '110'
},

{
  novela_id: 1,
  titulo: 'Acompañado por un tonto que se dedica a la agricultura',
  ingles: 'Accompanied by a Fool To Do Farming',
  original: '种田之傻傻相陪',
  slug: 'Acompañado_por_un_tonto_que_se_dedica_a_la_agricultura',
  tags: 'bl china finalizado china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion',
  autor: 'jinxiu-yun-ran',
  link: 'https://drive.google.com/drive/u/4/folders/1GeDB5EscYq3TrAAOHf02TX3bBnW3MjEs',
  capitulos: '90'
}

];


window.tarjetasHTML = novelas.map(novela => `
<div class="card"
  data-novela-id="${novela.novela_id}"
  data-tags="${novela.tags}"
  data-autor="${novela.autor}">

  <a href="${baseRuta}novelas/${novela.slug}.html">
    <img src="${baseRuta}imagenes/${novela.slug}.jpg"
         alt="${novela.titulo}">
  </a>

  <h3>${novela.titulo}</h3>

</div>
`).join("");
