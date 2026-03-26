const baseRuta = window.baseRuta || "";


const novelas = [

{
  titulo: 'Después de que el papel secundario masculino cayera en mis brazos',
  ingles: 'After the Male Supporting Role Fell Into My Arms',
  slug: 'Después_de_que_el_papel_secundario_masculino_cayera_en_mis_brazos',
  imagen: 'Después_de_que_el_papel_secundario_masculino_cayera_en_mis_brazos.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia cultivo espectaculo omegaverse realeza sistema transmigracion',
  autor: 'cheng-ling',
  link: 'https://www.novelupdates.com/series/after-the-male-supporting-role-fell-into-my-arms/',
  capitulos: '180'
},

{
  titulo: 'Después de ser obligada a casarse con un marido feo',
  ingles: 'After Being Forced to Marry an Ugly Husband',
  slug: 'Después_de_ser_obligada_a_casarse_con_un_marido_feo',
  imagen: 'Después_de_ser_obligada_a_casarse_con_un_marido_feo.jpg',
  tags: 'danmei pendiente china-antigua amnesia ger mpreg ninos transmigracion',
  autor: 'lin-qin-ren',
  link: 'https://www.novelupdates.com/series/after-being-forced-to-marry-an-ugly-husband/',
  capitulos: '132 + 44 extras'
},

{
  titulo: 'El granjero Ger en el apocalipsis',
  ingles: 'The Farmer Ger in the Apocalypse',
  slug: 'El_granjero_Ger_en_el_apocalipsis',
  imagen: 'El_granjero_Ger_en_el_apocalipsis.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger mpreg slice-of-life sobrenatural transportado-a-otro-mundo zombies',
  autor: 'tang-li-jian-dan',
  link: 'https://www.novelupdates.com/series/the-farmer-ger-in-the-apocalypse/',
  capitulos: '189 + 26 extras'
},

{
  titulo: 'El pequeño esposo de Lie Jiu',
  ingles: 'Lie Jiu’s Little Husband',
  slug: 'El_pequeño_esposo_de_Lie_Jiu',
  imagen: 'El_pequeño_esposo_de_Lie_Jiu.jpg',
  tags: 'danmei pendiente china-antigua agricultura comedia matrimonio mpreg ninos transmigracion',
  autor: 'lizi-tian-tian',
  link: 'https://www.novelupdates.com/series/lie-jius-little-husband/',
  capitulos: '193'
},

{
  titulo: 'El renacimiento del Ger loco',
  ingles: 'The Rebirth of Crazy Ger',
  slug: 'El_renacimiento_del_Ger_loco',
  imagen: 'El_renacimiento_del_Ger_loco.jpg',
  tags: 'danmei pendiente tribal amnesia ger hombres-bestia matrimonio-arreglado mpreg transmigracion',
  autor: 'mao-niao',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-crazy-ger/',
  capitulos: '177 + 1 extra'
},

{
  titulo: '¿Expulsaste hoy al discípulo del Loto Negro de la secta?',
  ingles: 'Did You Kick the Black Lotus Disciple Out of Sect Today?',
  slug: 'Expulsaste_hoy_al_discípulo_del_Loto_Negro_de_la_secta',
  imagen: 'Expulsaste_hoy_al_discípulo_del_Loto_Negro_de_la_secta.jpg',
  tags: 'danmei pendiente cultivacion cultivo drama maestro-discipulo transmigracion xianxia',
  autor: 'dongbei-da-hui-lang',
  link: 'https://www.novelupdates.com/series/did-you-kick-the-black-lotus-disciple-out-of-sect-today/',
  capitulos: '140 + 4 extras'
},

{
  titulo: 'Flores en flor, tristeza silenciosa',
  ingles: 'Blooming Flowers, Silent Sorrow',
  slug: 'Flores_en_flor,_tristeza_silenciosa',
  imagen: 'Flores_en_flor,_tristeza_silenciosa.jpg',
  tags: 'danmei pendiente china-antigua comedia malentendidos smut yandere',
  autor: 'shui-qian-cheng',
  link: 'https://www.novelupdates.com/series/blooming-flowers-silent-sorrow/',
  capitulos: '??'
},

{
  titulo: 'Hay una belleza [Vestimenta antigua moderna]',
  ingles: 'There’s a Beauty [Ancient Wear Modern]',
  slug: 'Hay_una_belleza_[Vestimenta_antigua_moderna]',
  imagen: 'Hay_una_belleza_[Vestimenta_antigua_moderna].jpg',
  tags: 'danmei pendiente moderno comedia malentendidos matrimonio-arreglado slice-of-life transmigracion',
  autor: 'nian-luan',
  link: 'https://www.novelupdates.com/series/theres-a-beauty-ancient-wear-modern/',
  capitulos: '105 + 6 extras'
},

{
  titulo: 'Hay que gastar el dinero del villano antes de que se declare en bancarrota',
  ingles: 'Must Spend the Villain’s Money Before He Goes Bankrupt',
  slug: 'Hay_que_gastar_el_dinero_del_villano_antes_de_que_se_declare_en_bancarrota',
  imagen: 'Hay_que_gastar_el_dinero_del_villano_antes_de_que_se_declare_en_bancarrota.jpg',
  tags: 'danmei pendiente moderno comedia espectaculo malentendidos transmigracion',
  autor: 'cai-ying',
  link: 'https://www.novelupdates.com/series/must-spend-the-villains-money-before-he-goes-bankrupt/',
  capitulos: '162 + 2 extra'
},

{
  titulo: 'La sirenita embarazada del Mariscal',
  ingles: 'Marshal’s Pregnant Little Mermaid',
  slug: 'La_sirenita_embarazada_del_Mariscal',
  imagen: 'La_sirenita_embarazada_del_Mariscal.jpg',
  tags: 'danmei pendiente futurista mpreg sirena transmigracion',
  autor: 'yan-liu-ruo-yun',
  link: 'https://www.novelupdates.com/series/marshals-pregnant-little-mermaid/',
  capitulos: '123 + 11 extras'
},

{
  titulo: 'Soy un pez salado en tiempos antiguos',
  ingles: 'I Am a Salted Fish in Ancient Times',
  slug: 'Soy_un_pez_salado_en_tiempos_antiguos',
  imagen: 'Soy_un_pez_salado_en_tiempos_antiguos.jpg',
  tags: 'danmei pendiente china-antigua comedia ger mpreg protagonista-gong realeza transmigracion',
  autor: 'shi-budai-wo',
  link: 'https://www.novelupdates.com/series/i-am-a-salted-fish-in-ancient-times/',
  capitulos: '97'
},

{
  titulo: 'Transmigrado a un gong despreciable que mima a su marido (Agricultura)',
  ingles: 'Transmigrated Into a Scummy Gong Who Pampers His Husband (Farming)',
  slug: 'Transmigrado_a_un_gong_despreciable_que_mima_a_su_marido_(Agricultura)',
  imagen: 'Transmigrado_a_un_gong_despreciable_que_mima_a_su_marido_(Agricultura).jpg',
  tags: 'danmei pendiente china-antigua mpreg ninos protagonista-gong slice-of-life transmigracion',
  autor: 'chishang-hong-yi',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-scummy-gong-who-pampers-his-husband-farming/',
  capitulos: '97 + 1 extra'
},

{
  titulo: 'Transmigrar al desierto primitivo como un Gran Dios',
  ingles: 'Transmigrated into the Primitive Wilderness as a Great God',
  slug: 'Transmigrar_al_desierto_primitivo_como_un_Gran_Dios',
  imagen: 'Transmigrar_al_desierto_primitivo_como_un_Gran_Dios.jpg',
  tags: 'danmei pendiente tribal comedia matrimonio-arreglado slice-of-life transmigracion',
  autor: 'da-gou-de-xiao-baozi',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-primitive-wilderness-as-a-great-god/',
  capitulos: '136 + 7 extras'
},

{
  titulo: 'Transmigrar para convertirse en esposo koi',
  ingles: 'Transmigrated to become a Koi Husband',
  slug: 'Transmigrar_para_convertirse_en_esposo_koi',
  imagen: 'Transmigrar_para_convertirse_en_esposo_koi.jpg',
  tags: 'danmei pendiente china-antigua agricultura amnesia bestias mpreg no-humano slice-of-life transmigracion',
  autor: 'chi-ling',
  link: 'https://www.novelupdates.com/series/transmigrated-to-become-a-koi-husband/',
  capitulos: '137 + 16 extras'
},

{
  titulo: 'Registros del despertar de los Zerg canalla',
  ingles: 'Scumbag Zerg Awakening Records',
  slug: 'Registros_del_despertar_de_los_Zerg_canalla',
  imagen: 'Registros_del_despertar_de_los_Zerg_canalla.jpg',
  tags: 'danmei pendiente futurista protagonista-gong reencarnacion slice-of-life transmigracion',
  autor: 'wo-suan-shenme-xiao-binggan',
  link: 'https://www.novelupdates.com/series/scumbag-zerg-awakening-records/',
  capitulos: '127'
},

{
  titulo: 'Ger, tan orgulloso',
  ingles: 'Ger, So Proud',
  slug: 'Ger,_tan_orgulloso',
  imagen: 'Ger,_tan_orgulloso.jpg',
  tags: 'danmei pendiente china-antigua agricultura mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'jin-futu',
  link: 'https://www.novelupdates.com/series/ger-so-proud/',
  capitulos: '117 + 2 extras'
},

{
  titulo: 'Es difícil que un personaje villano no colapse',
  ingles: 'It’s Hard for a Villain Character Not to Collapse',
  slug: 'Es_difícil_que_un_personaje_villano_no_colapse',
  imagen: 'Es_difícil_que_un_personaje_villano_no_colapse.jpg',
  tags: 'danmei pendiente cultivacion bestias cultivo malentendidos sistema transmigracion xuanhuan',
  autor: 'yun-feixie',
  link: 'https://www.novelupdates.com/series/its-hard-for-a-villain-character-not-to-collapse/',
  capitulos: '176 + 2 extras'
},

{
  titulo: 'Mi novio tartamudo',
  ingles: 'My Stuttering Boyfriend',
  slug: 'Mi_novio_tartamudo',
  imagen: 'Mi_novio_tartamudo.jpg',
  tags: 'danmei pendiente moderno drama slice-of-life smut',
  autor: 'duhai-bushi-yisheng',
  link: 'https://www.novelupdates.com/series/my-stuttering-boyfriend/',
  capitulos: '18'
},

{
  titulo: 'Estrategia del villano',
  ingles: 'Villain’s Strategy',
  slug: 'Estrategia_del_villano',
  imagen: 'Estrategia_del_villano.jpg',
  tags: 'danmei pendiente moderno comedia malentendidos school-life sistema transmigracion',
  autor: 'luobo-hua-tuzi',
  link: 'https://www.novelupdates.com/series/villains-strategy/',
  capitulos: '96 + 2 extra'
},

{
  titulo: 'El rectificador profesional de tres perspectivas [Transmigración]',
  ingles: 'The Professional Three Views Rectifier [Book Transmigration]',
  slug: 'El_rectificador_profesional_de_tres_perspectivas_[Transmigración]',
  imagen: 'El_rectificador_profesional_de_tres_perspectivas_[Transmigración].jpg',
  tags: 'danmei pendiente moderno drama sistema transmigracion',
  autor: 'sang-wo',
  link: 'https://www.novelupdates.com/series/the-professional-three-views-rectifier-book-transmigration/',
  capitulos: '69 + 4 extras'
},

{
  titulo: 'Toma su mano',
  ingles: 'Hold His Hand',
  slug: 'Toma_su_mano',
  imagen: 'Toma_su_mano.jpg',
  tags: 'danmei pendiente multiples-mundos cultivo protagonista-gong transmigracion zombies',
  autor: 'jue-jue',
  link: 'https://www.novelupdates.com/series/hold-his-hand/',
  capitulos: '292'
},

{
  titulo: 'Tengo un Halo de "Sistema"',
  ingles: '',
  slug: 'Tengo_un_Halo_de_Sistema',
  imagen: 'Tengo_un_Halo_de_Sistema.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia comedia sistema transmigracion',
  autor: 'qian-mo-li-shang',
  link: 'https://www.novelupdates.com/series/i-have-a-system-halo/',
  capitulos: ''
},

{
  titulo: 'Una ola de ex vino a buscarme. ¡¿Qué hacer?!',
  ingles: 'A Wave of Exes Came Looking for Me. What to Do?!',
  slug: 'Una_ola_de_ex_vino_a_buscarme._Qué_hacer',
  imagen: 'Una_ola_de_ex_vino_a_buscarme._Qué_hacer.jpg',
  tags: 'danmei pendiente multiples-mundos comedia sistema smut transmigracion yandere',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/a-wave-of-exes-came-looking-for-me-what-to-do/',
  capitulos: '64'
},

{
  titulo: 'Ser un rompecorazones en una película de terror',
  ingles: 'To Be a Heartthrob in a Horror Movie',
  slug: 'Ser_un_rompecorazones_en_una_película_de_terror',
  imagen: 'Ser_un_rompecorazones_en_una_película_de_terror.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia sobrenatural terror',
  autor: 'jiang-zhi-yu',
  link: 'https://www.novelupdates.com/series/to-be-a-heartthrob-in-a-horror-movie/',
  capitulos: '156'
},

{
  titulo: '¿Planeas matarme con Meng?',
  ingles: 'You Plan To Kill Me With Meng?',
  slug: 'Planeas_matarme_con_Meng',
  imagen: 'Planeas_matarme_con_Meng.jpg',
  tags: 'danmei en-proceso multiples-mundos animales no-humano transmigracion',
  autor: 'moru-gui',
  link: 'https://drive.google.com/drive/u/4/folders/1tJyZvYH_yluvC8HP_trZx2bg8mcSxjqn',
  capitulos: '346'
},

{
  titulo: 'Paquete adorable',
  ingles: 'Lovable Package',
  slug: 'Paquete_adorable',
  imagen: 'Paquete_adorable.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia cultivo sistema transmigracion',
  autor: 'qiu-shi-sha',
  link: 'https://www.novelupdates.com/series/lovable-package/',
  capitulos: '123'
},

{
  titulo: 'Nunca imaginé que Long Aotian se convertiría en mi esposa [Transmigración rápida]',
  ingles: 'I Never Imagined Long Aotian Would Become My Wife [Quick Transmigration]',
  slug: 'Nunca_imaginé_que_Long_Aotian_se_convertiría_en_mi_esposa_[Transmigración_rápida]',
  imagen: 'Nunca_imaginé_que_Long_Aotian_se_convertiría_en_mi_esposa_[Transmigración_rápida].jpg',
  tags: 'danmei pendiente multiples-mundos amnesia cultivo no-humano omegaverse protagonista-gong sistema transmigracion zombies',
  autor: 'zhen-zhong-mian',
  link: 'https://www.novelupdates.com/series/i-never-imagined-long-aotian-would-become-my-wife-quick-transmigration/',
  capitulos: '145 + 15 extras'
},

{
  titulo: 'No recojas novios del basurero',
  ingles: 'Don’t Pick Up Boyfriends From the Trash Bin',
  slug: 'No_recojas_novios_del_basurero',
  imagen: 'No_recojas_novios_del_basurero.jpg',
  tags: 'danmei pendiente multiples-mundos sistema tragedia transmigracion',
  autor: 'qi-jing-nan-qu',
  link: 'https://www.novelupdates.com/series/dont-pick-up-boyfriends-from-the-trash-bin/',
  capitulos: '270 + 13 extras'
},

{
  titulo: 'No esperes a tu novio en el crematorio',
  ingles: 'Don’t Wait for Your Boyfriend in the Crematorium',
  slug: 'No_esperes_a_tu_novio_en_el_crematorio',
  imagen: 'No_esperes_a_tu_novio_en_el_crematorio.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia comedia omegaverse protagonista-gong sistema transmigracion',
  autor: 'ke-zhou-qiu-ou',
  link: 'https://www.novelupdates.com/series/dont-wait-for-your-boyfriend-in-the-crematorium/',
  capitulos: '115'
},

{
  titulo: 'Mis pacientes se enamoran de mí',
  ingles: 'My Patients Fall in Love with Me',
  slug: 'Mis_pacientes_se_enamoran_de_mí',
  imagen: 'Mis_pacientes_se_enamoran_de_mí.jpg',
  tags: 'danmei pendiente multiples-mundos sistema smut transmigracion yandere',
  autor: 'xiu-sheng',
  link: 'https://www.novelupdates.com/series/my-patients-fall-in-love-with-me/',
  capitulos: '123'
},

{
  titulo: 'Me hice fanboy del villano',
  ingles: 'I Became a Fanboy of the Villain',
  slug: 'Me_hice_fanboy_del_villano',
  imagen: 'Me_hice_fanboy_del_villano.jpg',
  tags: 'danmei pendiente multiples-mundos comedia cultivo malentendidos sistema transmigracion',
  autor: 'buzhao-yi-zi',
  link: 'https://www.novelupdates.com/series/i-became-a-fanboy-of-the-villain/',
  capitulos: '80'
},

{
  titulo: 'Los Mariscales quieren divorciarse',
  ingles: 'The Marshals Want to Get Divorced',
  slug: 'Los_Mariscales_quieren_divorciarse',
  imagen: 'Los_Mariscales_quieren_divorciarse.jpg',
  tags: 'danmei pendiente multiples-mundos comedia cultivo sobrenatural transmigracion yandere',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/the-marshals-want-to-get-divorced/',
  capitulos: '114'
},

{
  titulo: 'La estrategia de lavar y limpiar una escoria Shou',
  ingles: 'The Strategy of Washing Clean a Slag Shou',
  slug: 'La_estrategia_de_lavar_y_limpiar_una_escoria_Shou',
  imagen: 'La_estrategia_de_lavar_y_limpiar_una_escoria_Shou.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia sistema transmigracion zombies',
  autor: 'ying-amu',
  link: 'https://www.novelupdates.com/series/the-strategy-of-washing-clean-a-slag-shou/',
  capitulos: '147'
},

{
  titulo: 'La carne de cañón es el rey [Transmigración rápida]',
  ingles: 'Cannon Fodder Is King [Quick Transmigration]',
  slug: 'La_carne_de_cañón_es_el_rey_[Transmigración_rápida]',
  imagen: 'La_carne_de_cañón_es_el_rey_[Transmigración_rápida].jpg',
  tags: 'danmei en-proceso multiples-mundos protagonista-gong protagonista-op sistema transmigracion venganza',
  autor: 'jia-zi-hai',
  link: 'https://drive.google.com/drive/u/4/folders/1aOjpnqUUGYQ0rRGcDEtBJa8iqq55s1k6',
  capitulos: '208'
},

{
  titulo: 'Yo cubro las espaldas de esta carne de cañón',
  ingles: 'I’ve Got this Cannon Fodder’s Back',
  slug: 'Yo_cubro_las_espaldas_de_esta_carne_de_cañón',
  imagen: 'Yo_cubro_las_espaldas_de_esta_carne_de_cañón.jpg',
  tags: 'danmei pendiente multiples-mundos comedia sistema slice-of-life transmigracion',
  autor: 'sanqian-da-meng-xu-pingsheng',
  link: 'https://www.novelupdates.com/series/ive-got-this-cannon-fodders-back/',
  capitulos: '152'
},

{
  titulo: 'Experimentar un final feliz con la escoria Shou',
  ingles: 'Experiencing a Happy Ending With a Scum Shou',
  slug: 'Experimentar_un_final_feliz_con_la_escoria_Shou',
  imagen: 'Experimentar_un_final_feliz_con_la_escoria_Shou.jpg',
  tags: 'danmei pendiente multiples-mundos protagonista-gong smut transmigracion yandere',
  autor: 'moru-gui',
  link: 'https://www.novelupdates.com/series/experiencing-a-happy-ending-with-a-scum-shou/',
  capitulos: '114 + 1 extra'
},

{
  titulo: 'Estrategia para capturar esa escoria Gong',
  ingles: 'Strategy to Capture that Scum Gong',
  slug: 'Estrategia_para_capturar_esa_escoria_Gong',
  imagen: 'Estrategia_para_capturar_esa_escoria_Gong.jpg',
  tags: 'danmei pendiente multiples-mundos malentendidos sistema tragedia venganza yandere',
  autor: 'jimo-yao',
  link: 'https://www.novelupdates.com/series/strategy-to-capture-that-scum-gong/',
  capitulos: '211'
},

{
  titulo: 'Esta experiencia de transmigración rápida es un poco dulce',
  ingles: 'This Quick Transmigration Experience Is a Bit Sweet',
  slug: 'Esta_experiencia_de_transmigración_rápida_es_un_poco_dulce',
  imagen: 'Esta_experiencia_de_transmigración_rápida_es_un_poco_dulce.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia comedia no-humano sistema transmigracion yandere',
  autor: 'chang-nian-jun',
  link: 'https://www.novelupdates.com/series/this-quick-transmigration-experience-is-a-bit-sweet/',
  capitulos: '133 + extras'
},

{
  titulo: 'Enciende el sistema del amor',
  ingles: 'Turn on the Love System',
  slug: 'Enciende_el_sistema_del_amor',
  imagen: 'Enciende_el_sistema_del_amor.jpg',
  tags: 'danmei pendiente multiples-mundos drama mpreg sistema transmigracion',
  autor: 'juzi-zhou',
  link: 'https://www.novelupdates.com/series/turn-on-the-love-system/',
  capitulos: '188 + 2 extras'
},

{
  titulo: 'En realidad, no es fácil ser un protagonista masculino secundario',
  ingles: 'A It’s Actually Not Easy Wanting to be a Supporting Male Lead',
  slug: 'En_realidad,_no_es_fácil_ser_un_protagonista_masculino_secundario',
  imagen: 'En_realidad,_no_es_fácil_ser_un_protagonista_masculino_secundario.jpg',
  tags: 'danmei pendiente multiples-mundos bestias cultivo malentendidos no-humano realeza smut tragedia transmigracion zombies',
  autor: 'mijia',
  link: 'https://www.novelupdates.com/series/its-actually-not-easy-wanting-to-be-a-supporting-male-lead/',
  capitulos: '200 + 5 extras'
},

{
  titulo: 'El villano cargó mi sistema',
  ingles: 'The Villain Loaded My System',
  slug: 'El_villano_cargó_mi_sistema',
  imagen: 'El_villano_cargó_mi_sistema.jpg',
  tags: 'danmei finalizado multiples-mundos amnesia comedia sistema transmigracion venganza yandere',
  autor: 'you-hu-qiansui',
  link: 'https://drive.google.com/drive/u/4/folders/1qs-c5MPxZkbmWf1I7wAh72_N-_amVVqb',
  capitulos: '112'
},

{
  titulo: '¡El té verde siempre apunta a la persona equivocada!',
  ingles: 'The Green Tea is Always Targeting the Wrong Person!',
  slug: 'El_té_verde_siempre_apunta_a_la_persona_equivocada',
  imagen: 'El_té_verde_siempre_apunta_a_la_persona_equivocada.jpg',
  tags: 'danmei pendiente multiples-mundos no-humano omegaverse sistema transmigracion venganza zombies',
  autor: 'jieke-maomi',
  link: 'https://www.novelupdates.com/series/the-green-tea-is-always-targeting-the-wrong-person/',
  capitulos: '91'
},

{
  titulo: 'El protagonista sólo piensa en enamorarse',
  ingles: 'The Protagonist Only Thinks About Falling In Love',
  slug: 'El_protagonista_sólo_piensa_en_enamorarse',
  imagen: 'El_protagonista_sólo_piensa_en_enamorarse.jpg',
  tags: 'danmei pendiente multiples-mundos cultivo multiples-protagonistas no-humano protagonista-gong sistema sobrenatural zombies',
  autor: 'zhu-ge-tian-zong',
  link: 'https://www.novelupdates.com/series/the-protagonist-only-thinks-about-falling-in-love/',
  capitulos: '237 + 2 extras'
},

{
  titulo: 'El plan de contraataque de un villano con diez mil fans',
  ingles: 'The Counterattack Plan of A Villain With Ten Thousand Fans',
  slug: 'El_plan_de_contraataque_de_un_villano_con_diez_mil_fans',
  imagen: 'El_plan_de_contraataque_de_un_villano_con_diez_mil_fans.jpg',
  tags: 'danmei pendiente multiples-mundos comedia cultivo omegaverse sistema yandere zombies',
  autor: 'conglai-bu-wen',
  link: 'https://www.novelupdates.com/series/the-counterattack-plan-of-a-villain-with-ten-thousand-fans/',
  capitulos: '335 + 14 extras'
},

{
  titulo: '¡El objetivo siempre piensa que me gusta!',
  ingles: 'The Target Always Thinks That I Like Him!',
  slug: 'El_objetivo_siempre_piensa_que_me_gusta',
  imagen: 'El_objetivo_siempre_piensa_que_me_gusta.jpg',
  tags: 'danmei pendiente multiples-mundos comedia cultivo malentendidos sistema zombies',
  autor: 'zhuo-ran',
  link: 'https://www.novelupdates.com/series/the-target-always-thinks-that-i-like-him/',
  capitulos: '168 + 15 extras'
},

{
  titulo: 'El destino perfecto',
  ingles: 'The Perfect Destiny',
  slug: 'El_destino_perfecto',
  imagen: 'El_destino_perfecto.jpg',
  tags: 'danmei pendiente multiples-mundos comedia omegaverse sistema smut tragedia transmigracion yandere zombies',
  autor: 'xi-zixu',
  link: 'https://www.novelupdates.com/series/the-perfect-destiny/',
  capitulos: '157'
},

{
  titulo: 'Cómo morir tan pesado como el monte Tai',
  ingles: 'How To Die As Heavy As Mount Tai',
  slug: 'Cómo_morir_tan_pesado_como_el_monte_Tai',
  imagen: 'Cómo_morir_tan_pesado_como_el_monte_Tai.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia cultivo omegaverse sistema sobrenatural tragedia transmigracion zombies',
  autor: 'mao-ba-xiansheng',
  link: 'https://www.novelupdates.com/series/how-to-die-as-heavy-as-mount-tai/',
  capitulos: '194'
},

{
  titulo: 'Cómo enamorarse del villano',
  ingles: 'How to Fall in Love with the Villain',
  slug: 'Cómo_enamorarse_del_villano',
  imagen: 'Cómo_enamorarse_del_villano.jpg',
  tags: 'danmei pendiente multiples-mundos hombres-bestia mpreg multiples-protagonistas transmigracion',
  autor: 'han-zhang-bu-luo',
  link: 'https://www.novelupdates.com/series/how-to-fall-in-love-with-the-villain/',
  capitulos: '84'
},

{
  titulo: 'Como el personaje rival gay en las novelas BG',
  ingles: 'As the Minor Gay Rival in Het Novels',
  slug: 'Como_el_personaje_rival_gay_en_las_novelas_BG',
  imagen: 'Como_el_personaje_rival_gay_en_las_novelas_BG.jpg',
  tags: 'danmei pendiente multiples-mundos amnesia cultivo drama omegaverse sistema transmigracion yandere zombies',
  autor: 'ying-amu',
  link: 'https://www.novelupdates.com/series/as-the-minor-gay-rival-in-het-novels/',
  capitulos: '106 + 11 extras'
},

{
  titulo: 'BOSS transmigra como una pequeña monada',
  ingles: 'BOSS Transmigrates as a Little Cutie',
  slug: 'BOSS_transmigra_como_una_pequeña_monada',
  imagen: 'BOSS_transmigra_como_una_pequeña_monada.jpg',
  tags: 'danmei pendiente multiples-mundos cultivo drama no-humano omegaverse protagonista-op transmigracion venganza',
  autor: 'guangming-zai-an',
  link: 'https://www.novelupdates.com/series/boss-transmigrates-as-a-little-cutie/',
  capitulos: '154 + 5 extras'
},

{
  titulo: 'Aquellos años en que matamos al loto blanco',
  ingles: 'Those Years When We Killed the White Lotus',
  slug: 'Aquellos_años_en_que_matamos_al_loto_blanco',
  imagen: 'Aquellos_años_en_que_matamos_al_loto_blanco.jpg',
  tags: 'danmei pendiente multiples-mundos cultivo inteligencia-artificial omegaverse sistema transmigracion yandere zombies',
  autor: 'mo-shuo-sheng-gui',
  link: 'https://www.novelupdates.com/series/those-years-when-we-killed-the-white-lotus/',
  capitulos: '149'
},

{
  titulo: 'Accidentalmente ataqué a un gran demonio',
  ingles: 'Accidentally Attacked a Great Demon King',
  slug: 'Accidentalmente_ataqué_a_un_gran_demonio',
  imagen: 'Accidentalmente_ataqué_a_un_gran_demonio.jpg',
  tags: 'danmei pendiente multiples-mundos cultivo drama protagonista-gong sobrenatural',
  autor: 'tianxia-tian',
  link: 'https://www.novelupdates.com/series/accidentally-attacked-a-great-demon-king/',
  capitulos: '122 + 4 extras'
},

{
  titulo: 'Transmigrar en el amigo de la infancia carne de cañón del rompecorazones',
  ingles: 'Transmigrating Into The Heartthrob’s Cannon Fodder Childhood Friend',
  slug: 'Transmigrar_en_el_amigo_de_la_infancia_carne_de_cañón_del_rompecorazones',
  imagen: 'Transmigrar_en_el_amigo_de_la_infancia_carne_de_cañón_del_rompecorazones.jpg',
  tags: 'danmei pendiente moderno comedia school-life sistema transmigracion',
  autor: 'qie-zai-shan-yang',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-heartthrobs-cannon-fodder-childhood-friend/',
  capitulos: '105 + 1 extra'
},

{
  titulo: 'Transmigrar al exnovio del protagonista masculino renacido',
  ingles: 'Transmigrating into the Reborn Male Lead’s Ex-Boyfriend',
  slug: 'Transmigrar_al_exnovio_del_protagonista_masculino_renacido',
  imagen: 'Transmigrar_al_exnovio_del_protagonista_masculino_renacido.jpg',
  tags: 'danmei pendiente moderno drama malentendidos renacimiento sistema transmigracion',
  autor: 'wen-yukuan',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-reborn-male-leads-ex-boyfriend/',
  capitulos: '155 + 3 extras'
},

{
  titulo: 'Transmigrado en carne de cañón de un pez gordo, la pequeña esposa mimada',
  ingles: 'Transmigrated into A Big Shot’s Cannon Fodder Little Pampered Wife',
  slug: 'Transmigrado_en_carne_de_cañón_de_un_pez_gordo,_la_pequeña_esposa_mimada',
  imagen: 'Transmigrado_en_carne_de_cañón_de_un_pez_gordo,_la_pequeña_esposa_mimada.jpg',
  tags: 'danmei pendiente moderno ger matrimonio mpreg sistema transmigracion',
  autor: 'gongzi-xun-huan',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-big-shots-cannon-fodder-little-pampered-wife/',
  capitulos: '169 + 5 extras'
},

{
  titulo: 'Transmigrado como el ex del villano ciego',
  ingles: 'Transmigrated As the Ex of the Blind Villain',
  slug: 'Transmigrado_como_el_ex_del_villano_ciego',
  imagen: 'Transmigrado_como_el_ex_del_villano_ciego.jpg',
  tags: 'danmei pendiente moderno discapacidad matrimonio-arreglado slice-of-life transmigracion',
  autor: 'caolu',
  link: 'https://www.novelupdates.com/series/transmigrated-as-the-ex-of-the-blind-villain/',
  capitulos: '96'
},

{
  titulo: 'Transmigrado al prometido del emperador del cine que busca la muerte',
  ingles: 'Transmigrated into the Film Emperor’s Death-Seeking Fiance',
  slug: 'Transmigrado_al_prometido_del_emperador_del_cine_que_busca_la_muerte',
  imagen: 'Transmigrado_al_prometido_del_emperador_del_cine_que_busca_la_muerte.jpg',
  tags: 'danmei pendiente moderno espectaculo matrimonio-arreglado mpreg ninos slice-of-life transmigracion',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-film-emperors-death-seeking-fiance/',
  capitulos: '191 + 98 extras'
},

{
  titulo: 'Transmigrado a un ídolo escolar y obligado a hacer negocios',
  ingles: 'Transmigrated into a School Idol and Forced to Do Business',
  slug: 'Transmigrado_a_un_ídolo_escolar_y_obligado_a_hacer_negocios',
  imagen: 'Transmigrado_a_un_ídolo_escolar_y_obligado_a_hacer_negocios.jpg',
  tags: 'danmei pendiente moderno comedia malentendidos school-life sistema transmigracion venganza',
  autor: 'yu-wu-xiao-tian-bing',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-school-idol-and-forced-to-do-business/',
  capitulos: '61 + 1 extra'
},

{
  titulo: 'Señor Dior',
  ingles: 'Mr. Dior',
  slug: 'Señor_Dior',
  imagen: 'Señor_Dior.jpg',
  tags: 'danmei pendiente moderno amnesia comedia matrimonio',
  autor: 'lu-ye-qian-he',
  link: 'https://www.novelupdates.com/series/mr-dior/',
  capitulos: '100 + 8 extras'
},

{
  titulo: 'Segundo amor',
  ingles: 'Second Love',
  slug: 'Segundo_amor',
  imagen: 'Segundo_amor.jpg',
  tags: 'danmei pendiente moderno discapacidad matrimonio slice-of-life smut',
  autor: 'zhi-zhi',
  link: 'https://www.novelupdates.com/series/second-love/',
  capitulos: '11 + 5 extras'
},

{
  titulo: 'Se casó con el hermano villano de la escoria Gong',
  ingles: 'Married the Scum Gong’s Villain Brother',
  slug: 'Se_casó_con_el_hermano_villano_de_la_escoria_Gong',
  imagen: 'Se_casó_con_el_hermano_villano_de_la_escoria_Gong.jpg',
  tags: 'danmei pendiente moderno matrimonio-arreglado slice-of-life transmigracion',
  autor: 'guan-hongyi',
  link: 'https://www.novelupdates.com/series/married-the-scum-gongs-villain-brother/',
  capitulos: '84 + 9 extras'
},

{
  titulo: 'Romance floreciente',
  ingles: 'Blooming Romance',
  slug: 'Romance_floreciente',
  imagen: 'Romance_floreciente.jpg',
  tags: 'danmei pendiente moderno malentendidos mpreg slice-of-life',
  autor: 'han-shu',
  link: 'https://www.novelupdates.com/series/blooming-romance/',
  capitulos: '111 + 15 extras'
},

{
  titulo: 'Rey de la música clásica',
  ingles: 'King of Classical Music',
  slug: 'Rey_de_la_música_clásica',
  imagen: 'Rey_de_la_música_clásica.jpg',
  tags: 'danmei pendiente moderno r18 slice-of-life transmigracion venganza',
  autor: 'mo-chen-huan',
  link: 'https://www.novelupdates.com/series/king-of-classical-music/',
  capitulos: '290 + 22 extras'
},

{
  titulo: 'Renacimiento: Un camino diferente',
  ingles: 'Rebirth: Different Way',
  slug: 'Renacimiento_Un_camino_diferente',
  imagen: 'Renacimiento_Un_camino_diferente.jpg',
  tags: 'danmei pendiente moderno drama renacimiento smut venganza',
  autor: 'li-song-ru',
  link: 'https://www.novelupdates.com/series/rebirth-different-way/',
  capitulos: '101'
},

{
  titulo: 'Renacimiento y redención',
  ingles: 'Rebirth and Redemption',
  slug: 'Renacimiento_y_redención',
  imagen: 'Renacimiento_y_redención.jpg',
  tags: 'danmei pendiente moderno protagonista-gong renacimiento school-life',
  autor: 'yi-ting-mo-tong',
  link: 'https://www.novelupdates.com/series/rebirth-and-redemption/',
  capitulos: '128 + 15 extras'
},

{
  titulo: 'Renacimiento para convertirse en la esposa Omega del presidente',
  ingles: 'Rebirth to Become the President’s Omega Wife',
  slug: 'Renacimiento_para_convertirse_en_la_esposa_Omega_del_presidente',
  imagen: 'Renacimiento_para_convertirse_en_la_esposa_Omega_del_presidente.jpg',
  tags: 'danmei pendiente moderno matrimonio mpreg omegaverse transmigracion',
  autor: 'hanmen-yatou',
  link: 'https://www.novelupdates.com/series/rebirth-to-become-the-presidents-omega-wife/',
  capitulos: '87'
},

{
  titulo: 'Renacido como el gato y el perro del presidente villano',
  ingles: 'Reborn as the Villain President’s Cat & Dog',
  slug: 'Renacido_como_el_gato_y_el_perro_del_presidente_villano',
  imagen: 'Renacido_como_el_gato_y_el_perro_del_presidente_villano.jpg',
  tags: 'danmei pendiente moderno espectaculo mascotas matrimonio renacimiento',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/reborn-as-the-villain-presidents-cat-dog/',
  capitulos: '111 + 10 extras'
},

{
  titulo: 'Renacer sólo para amarte de nuevo',
  ingles: 'Reborn Only to Love You Again',
  slug: 'Renacer_sólo_para_amarte_de_nuevo',
  imagen: 'Renacer_sólo_para_amarte_de_nuevo.jpg',
  tags: 'danmei pendiente moderno drama matrimonio renacimiento',
  autor: 'yige-xiao-ping-gai',
  link: 'https://www.novelupdates.com/series/reborn-only-to-love-you-again/',
  capitulos: '76'
},

{
  titulo: 'Renacer con un viejo enemigo el día de nuestro matrimonio',
  ingles: 'Reborn with an Old Enemy on the Day of our Marriage',
  slug: 'Renacer_con_un_viejo_enemigo_el_día_de_nuestro_matrimonio',
  imagen: 'Renacer_con_un_viejo_enemigo_el_día_de_nuestro_matrimonio.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio renacimiento school-life',
  autor: 'lin-zhiluo',
  link: 'https://www.novelupdates.com/series/reborn-with-an-old-enemy-on-the-day-of-our-marriage/',
  capitulos: '93 + 11 extras'
},

{
  titulo: 'Protagonista masculino 2 y Protagonista masculino 3 ¡Final feliz!',
  ingles: 'Male Lead 2 and Male Lead 3 Happy Ending!',
  slug: 'Protagonista_masculino_2_y_Protagonista_masculino_3_Final_feliz',
  imagen: 'Protagonista_masculino_2_y_Protagonista_masculino_3_Final_feliz.jpg',
  tags: 'danmei pendiente moderno malentendidos matrimonio slice-of-life transmigracion',
  autor: 'feng-jiu',
  link: 'https://www.novelupdates.com/series/male-lead-2-and-male-lead-3-happy-ending/',
  capitulos: '64 + 9 extras'
},

{
  titulo: 'Préstame atención',
  ingles: 'Pay Attention to Me',
  slug: 'Préstame_atención',
  imagen: 'Préstame_atención.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio omegaverse protagonista-gong school-life smut',
  autor: 'bing-kuai-er',
  link: 'https://www.novelupdates.com/series/pay-attention-to-me/',
  capitulos: '113 + 4 extras'
},

{
  titulo: '¡No quiero que seas responsable!',
  ingles: 'I Don’t Want You To Be Responsible!',
  slug: 'No_quiero_que_seas_responsable',
  imagen: 'No_quiero_que_seas_responsable.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio mpreg renacimiento slice-of-life',
  autor: 'bei-tang-mo',
  link: 'https://www.novelupdates.com/series/i-dont-want-you-to-be-responsible/',
  capitulos: '204 + 9 extras'
},

{
  titulo: 'No es fácil ser el hermano mayor de tu rival en el amor',
  ingles: 'It’s Not Easy Being Your Love Rival’s Big Brother',
  slug: 'No_es_fácil_ser_el_hermano_mayor_de_tu_rival_en_el_amor',
  imagen: 'No_es_fácil_ser_el_hermano_mayor_de_tu_rival_en_el_amor.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio renacimiento smut',
  autor: 'jing-feng-youzhi-cha',
  link: 'https://www.novelupdates.com/series/its-not-easy-being-your-love-rivals-big-brother/',
  capitulos: '58 + 2 extras'
},

{
  titulo: 'Mis cinco elementos te faltan',
  ingles: 'My Five Elements Lack You',
  slug: 'Mis_cinco_elementos_te_faltan',
  imagen: 'Mis_cinco_elementos_te_faltan.jpg',
  tags: 'danmei pendiente moderno discapacidad matrimonio sobrenatural terror transmigracion',
  autor: 'xi-zixu',
  link: 'https://www.novelupdates.com/series/my-five-elements-lack-you/',
  capitulos: '106 + 7 extras'
},

{
  titulo: 'Mi viejo gong tiene amnesia',
  ingles: 'My Old Gong Has Amnesia',
  slug: 'Mi_viejo_gong_tiene_amnesia',
  imagen: 'Mi_viejo_gong_tiene_amnesia.jpg',
  tags: 'danmei pendiente moderno amnesia comedia espectaculo matrimonio no-humano slice-of-life',
  autor: 'su-jingxian',
  link: 'https://www.novelupdates.com/series/my-old-gong-has-amnesia/',
  capitulos: '130'
},

{
  titulo: 'Mi expresión exterior es diferente de mi expresión interior',
  ingles: 'My Outside Expression Is Different From My Inner Expression',
  slug: 'Mi_expresión_exterior_es_diferente_de_mi_expresión_interior',
  imagen: 'Mi_expresión_exterior_es_diferente_de_mi_expresión_interior.jpg',
  tags: 'danmei pendiente moderno comedia discapacidad matrimonio sistema transmigracion',
  autor: 'gong-qing-han',
  link: 'https://www.novelupdates.com/series/my-outside-expression-is-different-from-my-inner-expression/',
  capitulos: '113'
},

{
  titulo: 'Mi esposo sufre de una enfermedad terminal',
  ingles: 'My Husband is Suffering from a Terminal Illness',
  slug: 'Mi_esposo_sufre_de_una_enfermedad_terminal',
  imagen: 'Mi_esposo_sufre_de_una_enfermedad_terminal.jpg',
  tags: 'danmei pendiente moderno discapacidad espectaculo matrimonio matrimonio-arreglado sistema transmigracion',
  autor: 'bu-hui-xia-qi',
  link: 'https://www.novelupdates.com/series/my-husband-is-suffering-from-a-terminal-illness/',
  capitulos: '171 + 4 extras'
},

{
  titulo: 'Mi esposa es heterosexual',
  ingles: 'My Wife is Straight',
  slug: 'Mi_esposa_es_heterosexual',
  imagen: 'Mi_esposa_es_heterosexual.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio oneshot protagonista-gong',
  autor: 'dongfeng-jixu',
  link: 'https://www.novelupdates.com/series/my-wife-is-straight/',
  capitulos: '2'
},

{
  titulo: 'Mi amigo de la infancia sigue intentando convertirme en gay',
  ingles: 'My Childhood Buddy Keeps Trying To Turn Me Gay',
  slug: 'Mi_amigo_de_la_infancia_sigue_intentando_convertirme_en_gay',
  imagen: 'Mi_amigo_de_la_infancia_sigue_intentando_convertirme_en_gay.jpg',
  tags: 'danmei pendiente moderno matrimonio slice-of-life',
  autor: 'jiao-hua-qing-jiu',
  link: 'https://www.novelupdates.com/series/my-childhood-buddy-keeps-trying-to-turn-me-gay/',
  capitulos: '5 + 1 extra'
},

{
  titulo: 'Me mordieron después de transmigrar a una pseudo-beta',
  ingles: 'I Got Bitten After Transmigrating into a Pseudo-Beta',
  slug: 'Me_mordieron_después_de_transmigrar_a_una_pseudo-beta',
  imagen: 'Me_mordieron_después_de_transmigrar_a_una_pseudo-beta.jpg',
  tags: 'danmei pendiente moderno matrimonio matrimonio-arreglado mpreg omegaverse transmigracion',
  autor: 'lu-wei-mu',
  link: 'https://www.novelupdates.com/series/i-got-bitten-after-transmigrating-into-a-pseudo-beta/',
  capitulos: '71 + 4 extras'
},

{
  titulo: 'Me escapé después de que ese viejo rico quedara embarazado de mi hijo',
  ingles: 'I Ran Away after that Rich Old Man was Pregnant with My Child',
  slug: 'Me_escapé_después_de_que_ese_viejo_rico_quedara_embarazado_de_mi_hijo',
  imagen: 'Me_escapé_después_de_que_ese_viejo_rico_quedara_embarazado_de_mi_hijo.jpg',
  tags: 'danmei pendiente moderno comedia mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'yun-zhi',
  link: 'https://www.novelupdates.com/series/i-ran-away-after-that-rich-old-man-was-pregnant-with-my-child/',
  capitulos: '93'
},

{
  titulo: 'Los grandes jefes no son lo que esperaba después de transmigrar a un libro',
  ingles: 'The Big Bosses Are Not What I Expected After I Transmigrated Into A Book',
  slug: 'Los_grandes_jefes_no_son_lo_que_esperaba_después_de_transmigrar_a_un_libro',
  imagen: 'Los_grandes_jefes_no_son_lo_que_esperaba_después_de_transmigrar_a_un_libro.jpg',
  tags: 'danmei pendiente moderno comedia drama malentendidos transmigracion',
  autor: 'zhu-tang',
  link: 'https://www.novelupdates.com/series/the-big-bosses-are-not-what-i-expected-after-i-transmigrated-into-a-book/',
  capitulos: '95 + 8 extras'
},

{
  titulo: 'Juego de seducción',
  ingles: 'Seduction Game',
  slug: 'Juego_de_seducción',
  imagen: 'Juego_de_seducción.jpg',
  tags: 'danmei pendiente moderno malentendidos smut',
  autor: 'shi-jiu-chi-cha',
  link: 'https://www.novelupdates.com/series/seduction-game/',
  capitulos: '4'
},

{
  titulo: 'Hielo de frijol rojo',
  ingles: 'Red Bean Ice',
  slug: 'Hielo_de_frijol_rojo',
  imagen: 'Hielo_de_frijol_rojo.jpg',
  tags: 'danmei pendiente moderno comedia espectaculo matrimonio slice-of-life smut',
  autor: 'yige-mi-bing',
  link: 'https://www.novelupdates.com/series/red-bean-ice/',
  capitulos: '20 + 2 extras'
},

{
  titulo: 'Estaba embarazado después del divorcio',
  ingles: 'I Was Pregnant After Divorce',
  slug: 'Estaba_embarazado_después_del_divorcio',
  imagen: 'Estaba_embarazado_después_del_divorcio.jpg',
  tags: 'danmei pendiente moderno drama malentendidos matrimonio-arreglado mpreg ninos omegaverse transmigracion',
  autor: 'juan-xin-xigua',
  link: 'https://www.novelupdates.com/series/i-was-pregnant-after-divorce/',
  capitulos: '50'
},

{
  titulo: 'Esposa masculina fuertemente mimada',
  ingles: 'Strongly Pampered Male Wife',
  slug: 'Esposa_masculina_fuertemente_mimada',
  imagen: 'Esposa_masculina_fuertemente_mimada.jpg',
  tags: 'danmei pendiente moderno drama matrimonio-arreglado mpreg slice-of-life',
  autor: 'chijiao-xia-de-lu',
  link: 'https://www.novelupdates.com/series/strongly-pampered-male-wife/',
  capitulos: '64'
},

{
  titulo: 'Epifanías del renacimiento',
  ingles: 'Epiphanies of Rebirth',
  slug: 'Epifanías_del_renacimiento',
  imagen: 'Epifanías_del_renacimiento.jpg',
  tags: 'danmei pendiente moderno comedia malentendidos matrimonio renacimiento slice-of-life',
  autor: 'yuan-hegu',
  link: 'https://www.novelupdates.com/series/epiphanies-of-rebirth/',
  capitulos: '85 + 12 extras'
},

{
  titulo: 'El emperador del cine pide el divorcio todos los días',
  ingles: 'The Film Emperor Asks for Divorce Every Day',
  slug: 'El_emperador_del_cine_pide_el_divorcio_todos_los_días',
  imagen: 'El_emperador_del_cine_pide_el_divorcio_todos_los_días.jpg',
  tags: 'danmei pendiente moderno comedia espectaculo mpreg transmigracion',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/the-film-emperor-asks-for-divorce-every-day/',
  capitulos: '116 + 8 extras'
},

{
  titulo: 'Días en que salvé mi vida al lado del Husky',
  ingles: 'Life-Saving Days by the Husky’s Side',
  slug: 'Días_en_que_salvé_mi_vida_al_lado_del_Husky',
  imagen: 'Días_en_que_salvé_mi_vida_al_lado_del_Husky.jpg',
  tags: 'danmei pendiente moderno comedia mascotas school-life sobrenatural transmigracion yandere',
  autor: 'yishi-hua-shang',
  link: 'https://www.novelupdates.com/series/life-saving-days-by-the-huskys-side/',
  capitulos: '71 + 4 extras'
},

{
  titulo: 'Después de un matrimonio repentino con el tirano discapacitado',
  ingles: 'After a Flash Marriage With the Disabled Tyrant',
  slug: 'Después_de_un_matrimonio_repentino_con_el_tirano_discapacitado',
  imagen: 'Después_de_un_matrimonio_repentino_con_el_tirano_discapacitado.jpg',
  tags: 'danmei pendiente moderno discapacidad matrimonio-arreglado renacimiento venganza',
  autor: 'nie-si',
  link: 'https://www.novelupdates.com/series/after-a-flash-marriage-with-the-disabled-tyrant/',
  capitulos: '94 + 17 extras'
},

{
  titulo: 'Después de transmigrar hice llorar al antagonista',
  ingles: 'After Transmigrating I Made The Antagonist Cry',
  slug: 'Después_de_transmigrar_hice_llorar_al_antagonista',
  imagen: 'Después_de_transmigrar_hice_llorar_al_antagonista.jpg',
  tags: 'danmei pendiente moderno comedia espectaculo protagonista-gong slice-of-life transmigracion',
  autor: 'qiaomu-li',
  link: 'https://www.novelupdates.com/series/after-transmigrating-i-made-the-antagonist-cry/',
  capitulos: '75 + 3 extras'
},

{
  titulo: 'Después de ser transportado a un libro, adopté al villano',
  ingles: 'After Being Transported into a Book, I Adopted the Villain',
  slug: 'Después_de_ser_transportado_a_un_libro,_adopté_al_villano',
  imagen: 'Después_de_ser_transportado_a_un_libro,_adopté_al_villano.jpg',
  tags: 'danmei pendiente moderno discapacidad slice-of-life transmigracion yandere',
  autor: 'tian-ni-xiaomi-zhou',
  link: 'https://www.novelupdates.com/series/after-being-transported-into-a-book-i-adopted-the-villain/',
  capitulos: '86 + 2 extras'
},

{
  titulo: 'Después de que regresó la luz de la luna blanca, el sustituto cayó en una crisis de desempleo',
  ingles: 'Enemy After the White Moonlight Came Back, the Stand-in Fell Into Unemployment Crisis',
  slug: 'Después_de_que_regresó_la_luz_de_la_luna_blanca,_el_sustituto_cayó_en_una_crisis_de_desempleo',
  imagen: 'Después_de_que_regresó_la_luz_de_la_luna_blanca,_el_sustituto_cayó_en_una_crisis_de_desempleo.jpg',
  tags: 'danmei pendiente moderno comedia malentendidos',
  autor: 'xiang-lu-gua',
  link: 'https://www.novelupdates.com/series/after-the-white-moonlight-came-back-the-stand-in-fell-into-unemployment-crisis/',
  capitulos: '30 + 1 extra'
},

{
  titulo: 'Después de poseer al pequeño genio del césped de la escuela',
  ingles: 'After I Possessed the Tmall Genie of the School Adonis',
  slug: 'Después_de_poseer_al_pequeño_genio_del_césped_de_la_escuela',
  imagen: 'Después_de_poseer_al_pequeño_genio_del_césped_de_la_escuela.jpg',
  tags: 'danmei pendiente moderno comedia school-life sobrenatural',
  autor: 'lin-ang-si',
  link: 'https://www.novelupdates.com/series/after-i-possessed-the-tmall-genie-of-the-school-adonis/',
  capitulos: '80 + 4 extras'
},

{
  titulo: 'Después de convertirme en llanta de repuesto, el villano y el protagonista masculino me atacaron al mismo tiempo',
  ingles: 'After Becoming a Spare Tire, I Was Targeted by the Villain and the Male Lead at the Same Time',
  slug: 'Después_de_convertirme_en_llanta_de_repuesto,_el_villano_y_el_protagonista_masculino_me_atacaron_al_mismo_tiempo',
  imagen: 'Después_de_convertirme_en_llanta_de_repuesto,_el_villano_y_el_protagonista_masculino_me_atacaron_al_mismo_tiempo.jpg',
  tags: 'danmei pendiente moderno comedia compromiso-roto enemigos-a-amantes sistema slice-of-life transmigracion yandere',
  autor: 'yi-yezi',
  link: 'https://www.novelupdates.com/series/after-becoming-a-spare-tire-i-was-targeted-by-the-villain-and-the-male-lead-at-the-same-time/',
  capitulos: '154'
},

{
  titulo: 'Cada día después del matrimonio es realmente fragante',
  ingles: 'Every Day After Marriage Is Really Fragrant',
  slug: 'Cada_día_después_del_matrimonio_es_realmente_fragante',
  imagen: 'Cada_día_después_del_matrimonio_es_realmente_fragante.jpg',
  tags: 'danmei pendiente moderno comedia matrimonio-arreglado mpreg transmigracion',
  autor: 'dongfeng-jixu',
  link: 'https://www.novelupdates.com/series/every-day-after-marriage-is-really-fragrant/',
  capitulos: '98 + 2 extras'
},

{
  titulo: 'Barra de progreso de la muerte',
  ingles: 'Death Progress Bar',
  slug: 'Barra_de_progreso_de_la_muerte',
  imagen: 'Barra_de_progreso_de_la_muerte.jpg',
  tags: 'danmei pendiente moderno comedia discapacidad malentendidos sistema sobrenatural transmigracion',
  autor: 'bu-hui-xia-qi',
  link: 'https://www.novelupdates.com/series/death-progress-bar/',
  capitulos: '167'
},

{
  titulo: 'Aspiraciones de superestrella',
  ingles: 'Superstar Aspirations',
  slug: 'Aspiraciones_de_superestrella',
  imagen: 'Aspiraciones_de_superestrella.jpg',
  tags: 'danmei pendiente moderno espectaculo slice-of-life transmigracion',
  autor: 'mo-chen-huan',
  link: 'https://www.novelupdates.com/series/superstar-aspirations/',
  capitulos: '165 + 12 extras'
},

{
  titulo: 'Transmigrado a una tribu de bestias',
  ingles: 'Transmigrated into a Beast Tribe',
  slug: 'Transmigrado_a_una_tribu_de_bestias',
  imagen: 'Transmigrado_a_una_tribu_de_bestias.jpg',
  tags: 'danmei pendiente tribal hombres-bestia mpreg ninos slice-of-life transportado-a-otro-mundo',
  autor: 'zise-jingji',
  link: 'https://www.novelupdates.com/series/transmigrated-into-a-beast-tribe/',
  capitulos: '102'
},

{
  titulo: 'Renacimiento con la bestia',
  ingles: 'Rebirth With The Beast',
  slug: 'Renacimiento_con_la_bestia',
  imagen: 'Renacimiento_con_la_bestia.jpg',
  tags: 'danmei pendiente tribal hombres-bestia mpreg ninos transmigracion',
  autor: 'ye-bu-siyu',
  link: 'https://www.novelupdates.com/series/rebirth-with-the-beast/',
  capitulos: '123 + 4 extras'
},

{
  titulo: 'La primavera del tonto Gong',
  ingles: 'Silly Spring Attack',
  slug: 'La_primavera_del_tonto_Gong',
  imagen: 'La_primavera_del_tonto_Gong.jpg',
  tags: 'danmei pendiente tribal hombres-bestia mpreg ninos protagonista-gong slice-of-life transportado-a-otro-mundo',
  autor: 'yi-luocheng-huo',
  link: 'https://www.novelupdates.com/series/silly-spring-attack/',
  capitulos: '79'
},

{
  titulo: 'Hombre bestia criando a una esposa a la fuerza',
  ingles: 'Beastman Forcefully Raising a Wife',
  slug: 'Hombre_bestia_criando_a_una_esposa_a_la_fuerza',
  imagen: 'Hombre_bestia_criando_a_una_esposa_a_la_fuerza.jpg',
  tags: 'danmei pendiente tribal agricultura hombres-bestia no-humano smut transmigracion',
  autor: 'tu-douya-er',
  link: 'https://www.novelupdates.com/series/beastman-forcefully-raising-a-wife/',
  capitulos: '110'
},

{
  titulo: 'Cruzando a lo Primitivo',
  ingles: 'Crossing to the Primitive',
  slug: 'Cruzando_a_lo_Primitivo',
  imagen: 'Cruzando_a_lo_Primitivo.jpg',
  tags: 'danmei pendiente tribal comedia hombres-bestia sistema transportado-a-otro-mundo',
  autor: 'ye-shen',
  link: 'https://www.novelupdates.com/series/crossing-to-the-primitive/',
  capitulos: '109'
},

{
  titulo: 'Tienda Bestia Linda No. 138',
  ingles: 'Cute Beast Store No. 138',
  slug: 'Tienda_Bestia_Linda_No._138',
  imagen: 'Tienda_Bestia_Linda_No._138.jpg',
  tags: 'danmei pendiente futurista bestias comedia no-humano transmigracion',
  autor: 'da-jiangshi',
  link: 'https://www.novelupdates.com/series/cute-beast-store-no-138/',
  capitulos: '171 + 6 extras'
},

{
  titulo: 'Superestrella favorita interestelar',
  ingles: 'Interstellar Favorite Superstar',
  slug: 'Superestrella_favorita_interestelar',
  imagen: 'Superestrella_favorita_interestelar.jpg',
  tags: 'danmei pendiente futurista comedia realeza transmigracion',
  autor: 'shen-qing',
  link: 'https://www.novelupdates.com/series/interstellar-favorite-superstar/',
  capitulos: '134'
},

{
  titulo: '¿Quieres tocar mi cola de pez?',
  ingles: 'Do You Want to Touch My Fish Tail?',
  slug: 'Quieres_tocar_mi_cola_de_pez',
  imagen: 'Quieres_tocar_mi_cola_de_pez.jpg',
  tags: 'danmei pendiente futurista malentendidos matrimonio-arreglado no-humano sirena',
  autor: 'xi-ci-shang',
  link: 'https://www.novelupdates.com/series/do-you-want-to-touch-my-fish-tail/',
  capitulos: '47'
},

{
  titulo: 'Pareja de poder interestelar',
  ingles: 'Interstellar Power Couple',
  slug: 'Pareja_de_poder_interestelar',
  imagen: 'Pareja_de_poder_interestelar.jpg',
  tags: 'danmei pendiente futurista comedia matrimonio-arreglado mpreg ninos transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/interstellar-power-couple/',
  capitulos: '118 + 23 extras'
},

{
  titulo: 'Ofrecido en matrimonio',
  ingles: 'Offered Into Marriage',
  slug: 'Ofrecido_en_matrimonio',
  imagen: 'Ofrecido_en_matrimonio.jpg',
  tags: 'danmei pendiente futurista comedia hombres-bestia inteligencia-artificial mpreg ninos transmigracion',
  autor: 'gui-ban-jing',
  link: 'https://www.novelupdates.com/series/offered-into-marriage/',
  capitulos: '160 + 20 extras'
},

{
  titulo: 'O pretende ser B para el almirante violento',
  ingles: 'O Pretends to be B For The Violent Admiral',
  slug: 'O_pretende_ser_B_para_el_almirante_violento',
  imagen: 'O_pretende_ser_B_para_el_almirante_violento.jpg',
  tags: 'danmei pendiente futurista comedia lucha-de-poder malentendidos mpreg omegaverse realeza',
  autor: 'gongzi-rou',
  link: 'https://www.novelupdates.com/series/o-pretends-to-be-b-for-the-violent-admiral/',
  capitulos: '95 + 5 extras'
},

{
  titulo: 'Mi compañero de cuarto probablemente no sea un omega',
  ingles: 'My Roommate Probably Is Not an Omega',
  slug: 'Mi_compañero_de_cuarto_probablemente_no_sea_un_omega',
  imagen: 'Mi_compañero_de_cuarto_probablemente_no_sea_un_omega.jpg',
  tags: 'danmei pendiente futurista comedia malentendidos omegaverse smut',
  autor: 'ablfish',
  link: 'https://www.novelupdates.com/series/my-roommate-probably-is-not-an-omega/',
  capitulos: '25'
},

{
  titulo: 'Me criaron después de ser una sirena',
  ingles: 'I Was Raised After Being a Mermaid',
  slug: 'Me_criaron_después_de_ser_una_sirena',
  imagen: 'Me_criaron_después_de_ser_una_sirena.jpg',
  tags: 'danmei pendiente futurista malentendidos mpreg no-humano realeza sirena transmigracion',
  autor: 'hanmen-yatou',
  link: 'https://www.novelupdates.com/series/i-was-raised-after-being-a-mermaid/',
  capitulos: '99 + 1 extra'
},

{
  titulo: 'Levantar un bollo con un sistema de vida diaria',
  ingles: 'Raising a Bun with a Daily Life System',
  slug: 'Levantar_un_bollo_con_un_sistema_de_vida_diaria',
  imagen: 'Levantar_un_bollo_con_un_sistema_de_vida_diaria.jpg',
  tags: 'danmei pendiente futurista comedia malentendidos mpreg ninos r18 sistema slice-of-life transmigracion',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/raising-a-bun-with-a-daily-life-system/',
  capitulos: '158'
},

{
  titulo: 'Lecciones sobre cómo criar una pareja',
  ingles: 'Lessons on Raising a Partner',
  slug: 'Lecciones_sobre_cómo_criar_una_pareja',
  imagen: 'Lecciones_sobre_cómo_criar_una_pareja.jpg',
  tags: 'danmei pendiente futurista comedia no-humano r18 transmigracion',
  autor: 'aci-guniang',
  link: 'https://www.novelupdates.com/series/lessons-on-raising-a-partner/',
  capitulos: '126 + 11 extras'
},

{
  titulo: 'Heredé el imperio con un embarazo falso',
  ingles: 'I Inherited Empire with Fake Pregnancy',
  slug: 'Heredé_el_imperio_con_un_embarazo_falso',
  imagen: 'Heredé_el_imperio_con_un_embarazo_falso.jpg',
  tags: 'danmei pendiente futurista bestias cultivo malentendidos mpreg transportado-a-otro-mundo',
  autor: 'lian-yi',
  link: 'https://www.novelupdates.com/series/i-inherited-empire-with-fake-pregnancy/',
  capitulos: '115 + 10 extras'
},

{
  titulo: 'Guía de matrimonio imperial',
  ingles: 'Imperial Marriage Guide',
  slug: 'Guía_de_matrimonio_imperial',
  imagen: 'Guía_de_matrimonio_imperial.jpg',
  tags: 'danmei pendiente futurista mpreg omegaverse smut',
  autor: 'ban-renjian',
  link: 'https://www.novelupdates.com/series/imperial-marriage-guide/',
  capitulos: '26'
},

{
  titulo: 'Transmigrado a la sirenita del jefe violento',
  ingles: 'Transmigrated Into the Violent Boss’ Little Mermaid',
  slug: 'Transmigrado_a_la_sirenita_del_jefe_violento',
  imagen: 'Transmigrado_a_la_sirenita_del_jefe_violento.jpg',
  tags: 'danmei pendiente futurista lucha-de-poder matrimonio no-humano sirena sistema slice-of-life transmigracion',
  autor: 'xian-sanqian',
  link: 'https://drive.google.com/drive/u/4/folders/1QQANOW_YNXuM1rcKdQe10CJwSc8czXSX',
  capitulos: '106 + 10 extras'
},

{
  titulo: 'Este insecto macho se vio obligado a mantener a su familia',
  ingles: 'This Male Was Forced To Support His Family',
  slug: 'Este_insecto_macho_se_vio_obligado_a_mantener_a_su_familia',
  imagen: 'Este_insecto_macho_se_vio_obligado_a_mantener_a_su_familia.jpg',
  tags: 'danmei pendiente futurista discapacidad drama matrimonio no-humano protagonista-gong zerg',
  autor: 'wo-huai',
  link: 'https://www.novelupdates.com/series/this-male-was-forced-to-support-his-family/',
  capitulos: '118 + 4 extras'
},

{
  titulo: 'El último creador',
  ingles: 'The Last Creator',
  slug: 'El_último_creador',
  imagen: 'El_último_creador.jpg',
  tags: 'danmei pendiente futurista inteligencia-artificial no-humano slice-of-life',
  autor: 'biandan-yi-hao',
  link: 'https://www.novelupdates.com/series/the-last-creator/',
  capitulos: '78'
},

{
  titulo: 'El trabajo del héroe Zerg',
  ingles: 'Insectoids: The Job of the Males',
  slug: 'El_trabajo_del_héroe_Zerg',
  imagen: 'El_trabajo_del_héroe_Zerg.jpg',
  tags: 'danmei pendiente futurista comedia no-humano transmigracion zerg',
  autor: 'youcai-de-yaoshi',
  link: 'https://www.novelupdates.com/series/insectoids-the-job-of-the-males/',
  capitulos: '78'
},

{
  titulo: 'El general ama coleccionar pequeñas flores rojas',
  ingles: 'The General Loves to Collect Little Red Flowers',
  slug: 'El_general_ama_coleccionar_pequeñas_flores_rojas',
  imagen: 'El_general_ama_coleccionar_pequeñas_flores_rojas.jpg',
  tags: 'danmei pendiente futurista comedia matrimonio-arreglado mpreg omegaverse slice-of-life transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/the-general-loves-to-collect-little-red-flowers/',
  capitulos: '105 + 6 extras'
},

{
  titulo: 'Después de transmigrar en un Omega, fui marcado por el enemigo',
  ingles: 'After Transmigrating Into an Omega, I Was Marked by the Enemy',
  slug: 'Después_de_transmigrar_en_un_Omega,_fui_marcado_por_el_enemigo',
  imagen: 'Después_de_transmigrar_en_un_Omega,_fui_marcado_por_el_enemigo.jpg',
  tags: 'danmei pendiente futurista comedia enemigos-a-amantes matrimonio-arreglado mpreg omegaverse transmigracion yandere',
  autor: 'shi-quan',
  link: 'https://www.novelupdates.com/series/after-transmigrating-into-an-omega-i-was-marked-by-the-enemy/',
  capitulos: '115 + 11 extras'
},

{
  titulo: 'Después de transmigrar a un villano carne de cañon Zerg masculino',
  ingles: 'After Transmigrating Into a Villain Cannon Fodder Male Zerg',
  slug: 'Después_de_transmigrar_a_un_villano_carne_de_cañon_Zerg_masculino',
  imagen: 'Después_de_transmigrar_a_un_villano_carne_de_cañon_Zerg_masculino.jpg',
  tags: 'danmei pendiente futurista comedia malentendidos matrimonio mpreg no-humano protagonista-gong sistema transmigracion yandere zerg',
  autor: 'mu-liang-ren',
  link: 'https://www.novelupdates.com/series/after-transmigrating-into-a-villain-cannon-fodder-male-zerg/',
  capitulos: '71 + 21 extras'
},

{
  titulo: 'Después de convertirme en el protagonista alfa, arrebaté el Omega carne de cañón',
  ingles: 'After Becoming the Alpha Protagonist, I Snatched the Cannon Fodder Omega',
  slug: 'Después_de_convertirme_en_el_protagonista_alfa,_arrebaté_el_Omega_carne_de_cañón',
  imagen: 'Después_de_convertirme_en_el_protagonista_alfa,_arrebaté_el_Omega_carne_de_cañón.jpg',
  tags: 'danmei pendiente futurista matrimonio-arreglado omegaverse protagonista-gong transmigracion',
  autor: 'caomei-tuotuo',
  link: 'https://www.novelupdates.com/series/after-becoming-the-alpha-protagonist-i-snatched-the-cannon-fodder-omega/',
  capitulos: '96 + 4 extras'
},

{
  titulo: 'Después de casarme, renacieron los que me traicionaron',
  ingles: 'After I Got Married, Those Who Betrayed Me Were Reborn',
  slug: 'Después_de_casarme,_renacieron_los_que_me_traicionaron',
  imagen: 'Después_de_casarme,_renacieron_los_que_me_traicionaron.jpg',
  tags: 'danmei pendiente futurista aristocracia discapacidad lucha-de-poder malentendidos matrimonio-arreglado omegaverse realeza renacimiento',
  autor: 'yu-luo-qing-chen',
  link: 'https://www.novelupdates.com/series/after-i-got-married-those-who-betrayed-me-were-reborn/',
  capitulos: '112 + 13 extras'
},

{
  titulo: 'De vuelta a la cima',
  ingles: 'Back to the Peak',
  slug: 'De_vuelta_a_la_cima',
  imagen: 'De_vuelta_a_la_cima.jpg',
  tags: 'danmei pendiente futurista bestias cultivo protagonista-gong slice-of-life',
  autor: 'jue-jue',
  link: 'https://www.novelupdates.com/series/back-to-the-peak/',
  capitulos: '167'
},

{
  titulo: 'Contrato de matrimonio de GunGun ojos Yin Yang',
  ingles: 'Yin Yang Eye GunGun’s Marriage Contract',
  slug: 'Contrato_de_matrimonio_de_GunGun_ojos_Yin_Yang',
  imagen: 'Contrato_de_matrimonio_de_GunGun_ojos_Yin_Yang.jpg',
  tags: 'danmei pendiente futurista comedia cultivo no-humano slice-of-life terror transformacion-animal transmigracion',
  autor: 'shui-sensen',
  link: 'https://www.novelupdates.com/series/yin-yang-eye-gunguns-marriage-contract/',
  capitulos: '115'
},

{
  titulo: 'Soy un limo',
  ingles: 'I am a Slime',
  slug: 'Soy_un_limo',
  imagen: 'Soy_un_limo.jpg',
  tags: 'danmei pendiente fantasia no-humano oneshot smut',
  autor: 'momose-wasabi',
  link: 'https://www.novelupdates.com/series/i-am-a-slime/',
  capitulos: '1'
},

{
  titulo: 'Renacer en un juego de Slash',
  ingles: 'Reborn into A Slash Game',
  slug: 'Renacer_en_un_juego_de_Slash',
  imagen: 'Renacer_en_un_juego_de_Slash.jpg',
  tags: 'danmei pendiente fantasia bestias comedia no-humano smut transmigracion',
  autor: 'long-qi',
  link: 'https://www.novelupdates.com/series/reborn-into-a-slash-game/',
  capitulos: '80 + extras'
},

{
  titulo: 'Período de cortejo',
  ingles: 'Courtship Period',
  slug: 'Período_de_cortejo',
  imagen: 'Período_de_cortejo.jpg',
  tags: 'danmei pendiente fantasia agricultura bestias malentendidos matrimonio mpreg no-humano protagonista-gong',
  autor: 'qi-guo-cha',
  link: 'https://www.novelupdates.com/series/courtship-period/',
  capitulos: '93 + 8 extras'
},

{
  titulo: 'Nutrir al héroe para evitar la muerte',
  ingles: 'Nurturing the Hero to Avoid Death',
  slug: 'Nutrir_al_héroe_para_evitar_la_muerte',
  imagen: 'Nutrir_al_héroe_para_evitar_la_muerte.jpg',
  tags: 'danmei pendiente europa-antigua aristocracia comedia punto-de-vista-multiple slice-of-life smut transportado-a-otro-mundo',
  autor: 'yomogino',
  link: 'https://www.novelupdates.com/series/nurturing-the-hero-to-avoid-death/',
  capitulos: '45 + extras'
},

{
  titulo: '¡Nunca pensé que serías este tipo de héroe!',
  ingles: 'Never Thought You’d Be This Kind of Hero!',
  slug: 'Nunca_pensé_que_serías_este_tipo_de_héroe',
  imagen: 'Nunca_pensé_que_serías_este_tipo_de_héroe.jpg',
  tags: 'danmei pendiente fantasia comedia transportado-a-otro-mundo',
  autor: 'ji-er-ji-jia',
  link: 'https://www.novelupdates.com/series/never-thought-youd-be-this-kind-of-hero/',
  capitulos: '182'
},

{
  titulo: 'Me reencarné como el villano de un eroge, pero antes de darme cuenta, me convertí en un objetivo de captura',
  ingles: 'I Reincarnated as the Villain in an Eroge, But Before I Realized, I Became a Capture Target',
  slug: 'Me_reencarné_como_el_villano_de_un_eroge,_pero_antes_de_darme_cuenta,_me_convertí_en_un_objetivo_de_captura',
  imagen: 'Me_reencarné_como_el_villano_de_un_eroge,_pero_antes_de_darme_cuenta,_me_convertí_en_un_objetivo_de_captura.jpg',
  tags: 'danmei pendiente fantasia comedia reencarnacion smut yandere',
  autor: 'yuzuki-haruka',
  link: 'https://www.novelupdates.com/series/i-reincarnated-as-the-villain-in-an-eroge-but-before-i-realized-i-became-a-capture-target/',
  capitulos: '126'
},

{
  titulo: 'Hacerlo con el creador en un juego de supervivencia',
  ingles: 'Doing It With the Creator in a Survival Game',
  slug: 'Hacerlo_con_el_creador_en_un_juego_de_supervivencia',
  imagen: 'Hacerlo_con_el_creador_en_un_juego_de_supervivencia.jpg',
  tags: 'danmei pendiente fantasia no-humano reencarnacion smut sobrenatural terror yandere',
  autor: 'xie-renxuan',
  link: 'https://www.novelupdates.com/series/doing-it-with-the-creator-in-a-survival-game/',
  capitulos: '135'
},

{
  titulo: 'Esta maldita sed de supervivencia',
  ingles: 'This Damned Thirst for Survival',
  slug: 'Esta_maldita_sed_de_supervivencia',
  imagen: 'Esta_maldita_sed_de_supervivencia.jpg',
  tags: 'danmei pendiente fantasia enemigos-a-amantes no-humano sobrenatural terror transmigracion yandere',
  autor: 'wang-sanshan',
  link: 'https://www.novelupdates.com/series/this-damned-thirst-for-survival/',
  capitulos: '224 + 14 extras'
},

{
  titulo: '¡Esta forma de transmigración es definitivamente incorrecta!',
  ingles: 'This Way of Transmigration Is Definitely Wrong!',
  slug: 'Esta_forma_de_transmigración_es_definitivamente_incorrecta',
  imagen: 'Esta_forma_de_transmigración_es_definitivamente_incorrecta.jpg',
  tags: 'danmei pendiente fantasia comedia transmigracion yandere',
  autor: 'shui-bingleng',
  link: 'https://www.novelupdates.com/series/this-way-of-transmigration-is-definitely-wrong/',
  capitulos: '169 + 23 extras'
},

{
  titulo: 'El príncipe desvergonzado',
  ingles: 'The Shameless Prince',
  slug: 'El_príncipe_desvergonzado',
  imagen: 'El_príncipe_desvergonzado.jpg',
  tags: 'danmei pendiente fantasia comedia oneshot protagonista-gong',
  autor: 'meng-bulang',
  link: 'https://www.novelupdates.com/series/the-shameless-prince/',
  capitulos: '1'
},

{
  titulo: 'El personaje virtual que crié personalmente quiere casarse conmigo',
  ingles: 'The Virtual Character I Personally Raised Wants to Marry Me',
  slug: 'El_personaje_virtual_que_crié_personalmente_quiere_casarse_conmigo',
  imagen: 'El_personaje_virtual_que_crié_personalmente_quiere_casarse_conmigo.jpg',
  tags: 'danmei pendiente fantasia inteligencia-artificial malentendidos realeza sistema transmigracion yandere',
  autor: 'zui-ai-meizi-jiu',
  link: 'https://www.novelupdates.com/series/the-virtual-character-i-personally-raised-wants-to-marry-me/',
  capitulos: '442 + 245 extras'
},

{
  titulo: 'El origen del diablo',
  ingles: 'The Devil’s Origin',
  slug: 'El_origen_del_diablo',
  imagen: 'El_origen_del_diablo.jpg',
  tags: 'danmei pendiente fantasia bestias harem ninos no-humano shota sistema smut transmigracion',
  autor: 'misheng',
  link: 'https://www.novelupdates.com/series/the-devils-origin/',
  capitulos: '110 (Abandonado)'
},

{
  titulo: 'Diario de criar una sirena',
  ingles: 'Diary of Raising a Mermaid',
  slug: 'Diario_de_criar_una_sirena',
  imagen: 'Diario_de_criar_una_sirena.jpg',
  tags: 'danmei pendiente fantasia no-humano sirena transmigracion',
  autor: 'you-yu-jiang',
  link: 'https://www.novelupdates.com/series/diary-of-raising-a-mermaid/',
  capitulos: '104 + 6 extras'
},

{
  titulo: 'Saber en la tercera mañana',
  ingles: 'Know on the Third Morning',
  slug: 'Saber_en_la_tercera_mañana',
  imagen: 'Saber_en_la_tercera_mañana.jpg',
  tags: 'danmei pendiente europa-antigua smut',
  autor: 'shiina',
  link: 'https://www.novelupdates.com/series/know-on-the-third-morning/',
  capitulos: '3'
},

{
  titulo: '¡Quiero disfrutar de la vida en el campo!',
  ingles: 'I Want To Enjoy A Country Life!',
  slug: 'Quiero_disfrutar_de_la_vida_en_el_campo',
  imagen: 'Quiero_disfrutar_de_la_vida_en_el_campo.jpg',
  tags: 'danmei pendiente europa-antigua agricultura harem incesto realeza reencarnacion smut yandere',
  autor: 'botamochi',
  link: 'https://www.novelupdates.com/series/i-want-to-enjoy-a-country-life/',
  capitulos: '23 + 2 extras'
},

{
  titulo: 'Transmigrar en un personaje de carne de cañón para rehabilitar el plan de villano',
  ingles: 'Transmigrating into a Mob Character to Rehabilitate the Villain Plan',
  slug: 'Transmigrar_en_un_personaje_de_carne_de_cañón_para_rehabilitar_el_plan_de_villano',
  imagen: 'Transmigrar_en_un_personaje_de_carne_de_cañón_para_rehabilitar_el_plan_de_villano.jpg',
  tags: 'danmei pendiente cultivacion amnesia cultivo drama transmigracion xianxia yandere',
  autor: 'sha-xiao-wan',
  link: 'https://www.novelupdates.com/series/transmigrating-into-a-mob-character-to-rehabilitate-the-villain-plan/',
  capitulos: '92 + 14 extras'
},

{
  titulo: 'Transmigrado al mundo del "Señor Demonio Wu Zun"',
  ingles: 'Transmigrated into the World of “Demon Lord Wu Zun”',
  slug: 'Transmigrado_al_mundo_del_Señor_Demonio_Wu_Zun',
  imagen: 'Transmigrado_al_mundo_del_Señor_Demonio_Wu_Zun.jpg',
  tags: 'danmei pendiente cultivacion bestias cultivo r18 transmigracion yandere',
  autor: 'yi-luocheng-huo',
  link: 'https://www.novelupdates.com/series/transmigrated-into-the-world-of-demon-lord-wu-zun/',
  capitulos: '133 + 19 extras'
},

{
  titulo: 'Todos los días el protagonista quiere capturarme',
  ingles: 'Every Day the Protagonist Wants to Capture Me',
  slug: 'Todos_los_días_el_protagonista_quiere_capturarme',
  imagen: 'Todos_los_días_el_protagonista_quiere_capturarme.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo sistema transmigracion xianxia yandere',
  autor: 'qing-duan',
  link: 'https://www.novelupdates.com/series/every-day-the-protagonist-wants-to-capture-me/',
  capitulos: '80 + 8 extras'
},

{
  titulo: 'Salvar al villano por error',
  ingles: 'Mistakenly Saving the Villain',
  slug: 'Salvar_al_villano_por_error',
  imagen: 'Salvar_al_villano_por_error.jpg',
  tags: 'danmei pendiente cultivacion amnesia cultivo maestro-discipulo malentendidos sistema tragedia transmigracion xianxia yandere',
  autor: 'feng-yu-nie',
  link: 'https://www.novelupdates.com/series/mistakenly-saving-the-villain/',
  capitulos: '119 + 1 extra'
},

{
  titulo: 'Renacimiento del Ser Celestial Supremo',
  ingles: 'Rebirth of the Supreme Celestial Being',
  slug: 'Renacimiento_del_Ser_Celestial_Supremo',
  imagen: 'Renacimiento_del_Ser_Celestial_Supremo.jpg',
  tags: 'danmei pendiente cultivacion cultivo mpreg protagonista-gong renacimiento xianxia',
  autor: 'bing-tang-lian-zi-geng',
  link: 'https://www.novelupdates.com/series/rebirth-of-the-supreme-celestial-being/',
  capitulos: '774 + 12 extras'
},

{
  titulo: 'No es fácil ser un maestro',
  ingles: 'It’s Not Easy Being a Master',
  slug: 'No_es_fácil_ser_un_maestro',
  imagen: 'No_es_fácil_ser_un_maestro.jpg',
  tags: 'danmei pendiente cultivacion cultivo maestro-discipulo renacimiento transmigracion xianxia yandere',
  autor: 'jin-xi-gu-nian',
  link: 'https://www.novelupdates.com/series/its-not-easy-being-a-master/comment-page-8/',
  capitulos: '79 + 3 extras'
},

{
  titulo: 'Mi shidi todavía no me ha matado',
  ingles: 'My Junior Still Hasn’t Killed Me',
  slug: 'Mi_shidi_todavía_no_me_ha_matado',
  imagen: 'Mi_shidi_todavía_no_me_ha_matado.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo transmigracion xianxia yandere',
  autor: 'zi-lu',
  link: 'https://www.novelupdates.com/series/my-junior-still-hasnt-killed-me/',
  capitulos: '29 + 5 extras'
},

{
  titulo: 'Me convertí en una esposa virtuosa y una madre amorosa en otro mundo de cultivación',
  ingles: 'I Became A Virtuous Wife and Loving Mother in another Cultivation World',
  slug: 'Me_convertí_en_una_esposa_virtuosa_y_una_madre_amorosa_en_otro_mundo_de_cultivación',
  imagen: 'Me_convertí_en_una_esposa_virtuosa_y_una_madre_amorosa_en_otro_mundo_de_cultivación.jpg',
  tags: 'danmei pendiente cultivacion cultivo matrimonio-arreglado mpreg ninos transmigracion xuanhuan',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/i-became-a-virtuous-wife-and-loving-mother-in-another-cultivation-world/',
  capitulos: '560'
},

{
  titulo: 'La tarea diaria de evitar que mi discípulo se pase al lado oscuro',
  ingles: 'The Daily Task of Preventing My Disciple from Turning to the Dark Side',
  slug: 'La_tarea_diaria_de_evitar_que_mi_discípulo_se_pase_al_lado_oscuro',
  imagen: 'La_tarea_diaria_de_evitar_que_mi_discípulo_se_pase_al_lado_oscuro.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo maestro-discipulo renacimiento xianxia yandere',
  autor: 'hei-mao-ni-ni',
  link: 'https://www.novelupdates.com/series/the-daily-task-of-preventing-my-disciple-from-turning-to-the-dark-side/',
  capitulos: '97'
},

{
  titulo: 'He llevado al villano por mal camino, ¿cómo lo soluciono?',
  ingles: 'I’ve Led the Villain Astray, How Do I Fix It?',
  slug: 'He_llevado_al_villano_por_mal_camino,_cómo_lo_soluciono',
  imagen: 'He_llevado_al_villano_por_mal_camino,_cómo_lo_soluciono.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo xianxia yandere',
  autor: 'yan-ye',
  link: 'https://www.novelupdates.com/series/ive-led-the-villain-astray-how-do-i-fix-it/',
  capitulos: '469 + 6 extras'
},

{
  titulo: 'Encubierto del culto del mal sale a la luz todos los días',
  ingles: 'Evil Cult Undercover Gets Exposed Everyday',
  slug: 'Encubierto_del_culto_del_mal_sale_a_la_luz_todos_los_días',
  imagen: 'Encubierto_del_culto_del_mal_sale_a_la_luz_todos_los_días.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo enemigos-a-amantes malentendidos transmigracion',
  autor: 'lu-tianyi',
  link: 'https://www.novelupdates.com/series/evil-cult-undercover-gets-exposed-everyday/',
  capitulos: '12'
},

{
  titulo: 'El sistema de autosalvación del villano escoria',
  ingles: 'The Scum Villain’s Self-Saving System',
  slug: 'El_sistema_de_autosalvación_del_villano_escoria',
  imagen: 'El_sistema_de_autosalvación_del_villano_escoria.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo maestro-discipulo r18 sistema transmigracion xianxia yandere',
  autor: 'mo-xiang-tongxiu',
  link: 'https://www.novelupdates.com/series/the-scum-villains-self-saving-system/',
  capitulos: '81 + 19 extras'
},

{
  titulo: 'El Rey Demonio siempre piensa que estoy secretamente enamorado de él',
  ingles: 'The Demon King Always Thinks I’m Secretly In Love With Him',
  slug: 'El_Rey_Demonio_siempre_piensa_que_estoy_secretamente_enamorado_de_él',
  imagen: 'El_Rey_Demonio_siempre_piensa_que_estoy_secretamente_enamorado_de_él.jpg',
  tags: 'danmei pendiente cultivacion comedia cultivo malentendidos sistema transmigracion xianxia',
  autor: 'dong-fang-huang-gua',
  link: 'https://www.novelupdates.com/series/the-demon-king-always-thinks-im-secretly-in-love-with-him/',
  capitulos: '103 + 1 extra'
},

{
  titulo: 'El regreso de la esposa abandonada',
  ingles: 'Comeback of the Abandoned Wife',
  slug: 'El_regreso_de_la_esposa_abandonada',
  imagen: 'El_regreso_de_la_esposa_abandonada.jpg',
  tags: 'danmei pendiente cultivacion cultivo matrimonio-arreglado renacimiento venganza xianxia',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/comeback-of-the-abandoned-wife/',
  capitulos: '386'
},

{
  titulo: 'El pequeño demonio zorro de dos colas y su sacerdote taoísta Gong',
  ingles: 'The Two-Tailed Little Fox Demon and His Taoist Priest Gong',
  slug: 'El_pequeño_demonio_zorro_de_dos_colas_y_su_sacerdote_taoísta_Gong',
  imagen: 'El_pequeño_demonio_zorro_de_dos_colas_y_su_sacerdote_taoísta_Gong.jpg',
  tags: 'danmei pendiente cultivacion bestias cultivo no-humano smut xianxia',
  autor: 'liulian-qiaokeli',
  link: 'https://www.novelupdates.com/series/the-two-tailed-little-fox-demon-and-his-taoist-priest-gong/',
  capitulos: '56 + 3 extras'
},

{
  titulo: 'El mundo entero es mi crematorio',
  ingles: 'The Whole World Is My Crematorium',
  slug: 'El_mundo_entero_es_mi_crematorio',
  imagen: 'El_mundo_entero_es_mi_crematorio.jpg',
  tags: 'danmei pendiente cultivacion amnesia cultivo malentendidos sistema tragedia transmigracion xianxia',
  autor: 'bikabi',
  link: 'https://www.novelupdates.com/series/the-whole-world-is-my-crematorium/',
  capitulos: '105 + 4 extras'
},

{
  titulo: 'El gran maestro de la cultivación demoníaca',
  ingles: 'The Founder of Diabolism',
  slug: 'El_gran_maestro_de_la_cultivación_demoníaca',
  imagen: 'El_gran_maestro_de_la_cultivación_demoníaca.jpg',
  tags: 'danmei pendiente cultivacion cultivo drama r18 reencarnacion sobrenatural xianxia',
  autor: 'mo-xiang-tongxiu',
  link: 'https://www.novelupdates.com/series/the-founder-of-diabolism/',
  capitulos: '113 + 14 extras'
},

{
  titulo: 'El desperdicio del renacimiento contraataca',
  ingles: 'The Rebirth Waste Strikes Back',
  slug: 'El_desperdicio_del_renacimiento_contraataca',
  imagen: 'El_desperdicio_del_renacimiento_contraataca.jpg',
  tags: 'danmei pendiente cultivacion comedia compromiso-roto cultivo malentendidos reencarnacion xuanhuan',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/the-rebirth-waste-strikes-back/',
  capitulos: '262 + 1 extra'
},

{
  titulo: 'Volver a cero',
  ingles: 'Back to Zero',
  slug: 'Volver_a_cero',
  imagen: 'Volver_a_cero.jpg',
  tags: 'danmei pendiente china-antigua matrimonio-arreglado mpreg protagonista-gong realeza renacimiento',
  autor: 'yi-ting-mo-tong',
  link: 'https://www.novelupdates.com/series/back-to-zero/',
  capitulos: '91'
},

{
  titulo: 'Viajar a través de la antigüedad para ser comerciante',
  ingles: 'Traveling Through Ancient Times To Be a Shopkeeper',
  slug: 'Viajar_a_través_de_la_antigüedad_para_ser_comerciante',
  imagen: 'Viajar_a_través_de_la_antigüedad_para_ser_comerciante.jpg',
  tags: 'danmei pendiente china-antigua ger matrimonio mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'yishi-yu',
  link: 'https://www.novelupdates.com/series/traveling-through-ancient-times-to-be-a-shopkeeper/',
  capitulos: '97 + 4 extras'
},

{
  titulo: 'Transmigrar a la antigüedad con la conveniencia de Lu',
  ingles: 'Transmigrating to the Ancient Times with Lu’s Convenience',
  slug: 'Transmigrar_a_la_antigüedad_con_la_conveniencia_de_Lu',
  imagen: 'Transmigrar_a_la_antigüedad_con_la_conveniencia_de_Lu.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger matrimonio-arreglado mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/transmigrating-to-the-ancient-times-with-lus-convenience/',
  capitulos: '175'
},

{
  titulo: 'Transmigrar a la amada esposa fugitiva del Príncipe Regente',
  ingles: 'Transmigrating into the Prince Regent’s Beloved Runaway Wife',
  slug: 'Transmigrar_a_la_amada_esposa_fugitiva_del_Príncipe_Regente',
  imagen: 'Transmigrar_a_la_amada_esposa_fugitiva_del_Príncipe_Regente.jpg',
  tags: 'danmei pendiente china-antigua aristocracia malentendidos matrimonio-arreglado transmigracion',
  autor: 'ruo-xing-ruo-chen',
  link: 'https://www.novelupdates.com/series/transmigrating-into-the-prince-regents-beloved-runaway-wife/',
  capitulos: '128 + 11 extras'
},

{
  titulo: 'Transmigración: la vida agrícola de un "tonto"',
  ingles: '"Transmigration: The Farm Life of a ""Fool"""',
  slug: 'Transmigración_la_vida_agrícola_de_un_tonto',
  imagen: 'Transmigración_la_vida_agrícola_de_un_tonto.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger mpreg ninos protagonista-gong slice-of-life transmigracion',
  autor: 'zixi',
  link: 'https://www.novelupdates.com/series/transmigration-the-farm-life-of-a-fool/',
  capitulos: '295 + 25 extras'
},

{
  titulo: 'Tienes un correo: un cuento con moraleja',
  ingles: 'You’ve Got Mail: A Cautionary Tale',
  slug: 'Tienes_un_correo_un_cuento_con_moraleja',
  imagen: 'Tienes_un_correo_un_cuento_con_moraleja.jpg',
  tags: 'danmei pendiente china-antigua comedia slice-of-life smut',
  autor: 'hei-dan-bai',
  link: 'https://www.novelupdates.com/series/youve-got-mail-a-cautionary-tale/',
  capitulos: '106'
},

{
  titulo: 'Soy la cruel carne de cañón del libro',
  ingles: 'I’m The Vicious Cannon Fodder In The Book',
  slug: 'Soy_la_cruel_carne_de_cañón_del_libro',
  imagen: 'Soy_la_cruel_carne_de_cañón_del_libro.jpg',
  tags: 'danmei pendiente china-antigua lucha-de-poder matrimonio-arreglado mpreg realeza transmigracion venganza',
  autor: 'nian-luan',
  link: 'https://www.novelupdates.com/series/im-the-vicious-cannon-fodder-in-the-book/',
  capitulos: '122 + 10 extras'
},

{
  titulo: '¡Te ruego que rompas este compromiso!',
  ingles: 'Begging You to Break Off This Engagement!',
  slug: 'Te_ruego_que_rompas_este_compromiso',
  imagen: 'Te_ruego_que_rompas_este_compromiso.jpg',
  tags: 'danmei pendiente china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion',
  autor: 'kun-cheng-xiong-mao',
  link: 'https://www.novelupdates.com/series/begging-you-to-break-off-this-engagement/',
  capitulos: '97 + 12 extras'
},

{
  titulo: 'Renacimiento como gobernante fatuo y autoindulgente',
  ingles: 'Rebirth As a Fatuous and Self-indulgent Ruler',
  slug: 'Renacimiento_como_gobernante_fatuo_y_autoindulgente',
  imagen: 'Renacimiento_como_gobernante_fatuo_y_autoindulgente.jpg',
  tags: 'danmei pendiente china-antigua protagonista-gong realeza transmigracion yandere',
  autor: 'xie-er',
  link: 'https://www.novelupdates.com/series/rebirth-as-a-fatuous-and-self-indulgent-ruler/',
  capitulos: '321'
},

{
  titulo: 'Primavera una vez más',
  ingles: 'Spring Once More',
  slug: 'Primavera_una_vez_más',
  imagen: 'Primavera_una_vez_más.jpg',
  tags: 'danmei pendiente china-antigua comedia harem protagonista-gong realeza transmigracion',
  autor: 'da-feng-gua-guo',
  link: 'https://www.novelupdates.com/series/spring-once-more/',
  capitulos: '65'
},

{
  titulo: 'Por los campos de cultivo llenos de primavera',
  ingles: 'Through the Farming Fields Full of Spring',
  slug: 'Por_los_campos_de_cultivo_llenos_de_primavera',
  imagen: 'Por_los_campos_de_cultivo_llenos_de_primavera.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger mpreg ninos transmigracion',
  autor: 'wentun-de-nuren',
  link: 'https://www.novelupdates.com/series/through-the-farming-fields-full-of-spring/',
  capitulos: '98'
},

{
  titulo: 'Pequeño Ger, vida lenta en otro mundo',
  ingles: 'Little Ger, Slow Life in Another World',
  slug: 'Pequeño_Ger,_vida_lenta_en_otro_mundo',
  imagen: 'Pequeño_Ger,_vida_lenta_en_otro_mundo.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger mpreg slice-of-life transmigracion',
  autor: 'j112233',
  link: 'https://www.novelupdates.com/series/little-ger-slow-life-in-another-world/',
  capitulos: '80 + 5 extras'
},

{
  titulo: 'Novia falsa',
  ingles: 'Counterfeit Bride',
  slug: 'Novia_falsa',
  imagen: 'Novia_falsa.jpg',
  tags: 'danmei pendiente china-antigua gender-bender smut',
  autor: 'zi-yue',
  link: 'https://www.novelupdates.com/series/counterfeit-bride/',
  capitulos: '10 + epílogo'
},

{
  titulo: 'No te amé lo suficiente',
  ingles: 'Didn’t Love You Enough',
  slug: 'No_te_amé_lo_suficiente',
  imagen: 'No_te_amé_lo_suficiente.jpg',
  tags: 'danmei en-proceso china-antigua drama ger matrimonio mpreg realeza renacimiento',
  autor: 'zuiaimiaomiao',
  link: 'https://drive.google.com/drive/u/4/folders/1YizuNmLo9RP-b_5aPCeIiVjfUOp6Wb9M',
  capitulos: '56'
},

{
  titulo: '¡No puedes ser feroz conmigo!',
  ingles: 'You Can’t Be Fierce Towards Me!',
  slug: 'No_puedes_ser_feroz_conmigo',
  imagen: 'No_puedes_ser_feroz_conmigo.jpg',
  tags: 'danmei pendiente china-antigua comedia renacimiento slice-of-life venganza',
  autor: 'xiu-sheng',
  link: 'https://www.novelupdates.com/series/you-cant-be-fierce-towards-me/',
  capitulos: '128 + 3 extras'
},

{
  titulo: 'Mi marido duro',
  ingles: 'My Tough Husband',
  slug: 'Mi_marido_duro',
  imagen: 'Mi_marido_duro.jpg',
  tags: 'danmei pendiente china-antigua comedia cultivo ger mpreg protagonista-gong realeza transmigracion',
  autor: 'xie-er',
  link: 'https://www.novelupdates.com/series/my-tough-husband/',
  capitulos: '259 + 3 extras'
},

{
  titulo: 'Mi guardia de la sombra me marcó después de fingir ser un alfa',
  ingles: 'I Got Marked By My Shadow Guard After Pretending To Be An Alpha',
  slug: 'Mi_guardia_de_la_sombra_me_marcó_después_de_fingir_ser_un_alfa',
  imagen: 'Mi_guardia_de_la_sombra_me_marcó_después_de_fingir_ser_un_alfa.jpg',
  tags: 'danmei pendiente china-antigua mpreg omegaverse realeza',
  autor: 'chi-ling',
  link: 'https://www.novelupdates.com/series/i-got-marked-by-my-shadow-guard-after-pretending-to-be-an-alpha/',
  capitulos: '24 + 1 extra'
},

{
  titulo: 'La vida agrícola diaria de Li Jin transmigrado',
  ingles: 'The Transmigrated Li Jin’s Daily Farming Life',
  slug: 'La_vida_agrícola_diaria_de_Li_Jin_transmigrado',
  imagen: 'La_vida_agrícola_diaria_de_Li_Jin_transmigrado.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger mpreg ninos protagonista-gong transmigracion',
  autor: 'hui-mou-yi-ban-xia',
  link: 'https://www.novelupdates.com/series/the-transmigrated-li-jins-daily-farming-life/',
  capitulos: '140 + 20 extras'
},

{
  titulo: 'La transmigración del maestro de la planta espiritual',
  ingles: 'The Spiritual Plant Master Transmigration',
  slug: 'La_transmigración_del_maestro_de_la_planta_espiritual',
  imagen: 'La_transmigración_del_maestro_de_la_planta_espiritual.jpg',
  tags: 'danmei pendiente china-antigua agricultura cultivo mpreg ninos protagonista-gong slice-of-life transmigracion',
  autor: 'ye-yiluo',
  link: 'https://www.novelupdates.com/series/the-spiritual-plant-master-transmigration/',
  capitulos: '397'
},

{
  titulo: 'La transmigración de Mian [a regañadientes] se convierte en su hombre [esposa]',
  ingles: 'Transmigration of Mian [Reluctantly] Becomes His Man [Wife]',
  slug: 'La_transmigración_de_Mian_[a_regañadientes]_se_convierte_en_su_hombre_[esposa]',
  imagen: 'La_transmigración_de_Mian_[a_regañadientes]_se_convierte_en_su_hombre_[esposa].jpg',
  tags: 'danmei pendiente china-antigua agricultura cultivo mpreg ninos slice-of-life transmigracion',
  autor: 'lianxi-ningmou',
  link: 'https://www.novelupdates.com/series/transmigration-of-mian-reluctantly-becomes-his-man-wife/',
  capitulos: '222'
},

{
  titulo: 'Hoy el Primer Ministro también quiere golpearse la cabeza contra el pilar',
  ingles: 'Today Prime Minister Also Wants to Bang His Head on the Pillar',
  slug: 'Hoy_el_Primer_Ministro_también_quiere_golpearse_la_cabeza_contra_el_pilar',
  imagen: 'Hoy_el_Primer_Ministro_también_quiere_golpearse_la_cabeza_contra_el_pilar.jpg',
  tags: 'danmei pendiente china-antigua comedia matrimonio punto-de-vista-multiple realeza smut',
  autor: 'bazaodashe',
  link: 'https://www.novelupdates.com/series/today-prime-minister-also-wants-to-bang-his-head-on-the-pillar/',
  capitulos: '21'
},

{
  titulo: 'Ganarse la vida, realizar exámenes y apoyar a la familia a través del sistema de exámenes imperial rural',
  ingles: 'Earning a Living, Taking Examinations, and Supporting the Family Through the Rural Imperial Examinations System',
  slug: 'Ganarse_la_vida,_realizar_exámenes_y_apoyar_a_la_familia_a_través_del_sistema_de_exámenes_imperial_rural',
  imagen: 'Ganarse_la_vida,_realizar_exámenes_y_apoyar_a_la_familia_a_través_del_sistema_de_exámenes_imperial_rural.jpg',
  tags: 'danmei pendiente china-antigua agricultura comedia ger mpreg slice-of-life transmigracion',
  autor: 'tu-yue-guan',
  link: 'https://www.novelupdates.com/series/earning-a-living-taking-examinations-and-supporting-the-family-through-the-rural-imperial-examinations-system/',
  capitulos: '170 + 13 extras'
},

{
  titulo: 'El tirano cruel',
  ingles: 'The Cruel Tyrant',
  slug: 'El_tirano_cruel',
  imagen: 'El_tirano_cruel.jpg',
  tags: 'danmei pendiente china-antigua enemigos-a-amantes harem realeza smut transmigracion',
  autor: 'rong-heng',
  link: 'https://www.novelupdates.com/series/the-cruel-tyrant/comment-page-2/?pg=1',
  capitulos: '127 + 4 extras'
},

{
  titulo: 'El sustituto de la belleza enfermiza abandono el trabajo',
  ingles: 'The Sickly Beauty Substitute Called It Quits',
  slug: 'El_sustituto_de_la_belleza_enfermiza_abandono_el_trabajo',
  imagen: 'El_sustituto_de_la_belleza_enfermiza_abandono_el_trabajo.jpg',
  tags: 'danmei pendiente china-antigua lucha-de-poder matrimonio-arreglado renacimiento',
  autor: 'yun-chutang',
  link: 'https://www.novelupdates.com/series/the-sickly-beauty-substitute-called-it-quits/',
  capitulos: '248 + 43 extras'
},

{
  titulo: 'El renacimiento del general que siempre se ve a sí mismo como un sustituto',
  ingles: 'The Rebirth Of The General Who Always Sees Himself As A Replacement',
  slug: 'El_renacimiento_del_general_que_siempre_se_ve_a_sí_mismo_como_un_sustituto',
  imagen: 'El_renacimiento_del_general_que_siempre_se_ve_a_sí_mismo_como_un_sustituto.jpg',
  tags: 'danmei pendiente china-antigua comedia lucha-de-poder malentendidos matrimonio realeza renacimiento venganza',
  autor: 'yi-yi-yi-yi',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-the-general-who-always-sees-himself-as-a-replacement/',
  capitulos: '169 + 6 extras'
},

{
  titulo: 'El pequeño y dulce Fulang',
  ingles: 'The Sweet Little Fulang',
  slug: 'El_pequeño_y_dulce_Fulang',
  imagen: 'El_pequeño_y_dulce_Fulang.jpg',
  tags: 'danmei pendiente china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life',
  autor: 'cha-chacha',
  link: 'https://www.novelupdates.com/series/the-sweet-little-fulang/',
  capitulos: '230'
},

{
  titulo: 'El pájaro Nie Bufan',
  ingles: 'Bird Dude Nie Bufan',
  slug: 'El_pájaro_Nie_Bufan',
  imagen: 'El_pájaro_Nie_Bufan.jpg',
  tags: 'danmei pendiente china-antigua harem mpreg smut sobrenatural transmigracion',
  autor: 'xueyuan-youling',
  link: 'https://www.novelupdates.com/series/bird-dude-nie-bufan/',
  capitulos: '113'
},

{
  titulo: 'El magnate culinario',
  ingles: 'The Culinary Tycoon',
  slug: 'El_magnate_culinario',
  imagen: 'El_magnate_culinario.jpg',
  tags: 'danmei pendiente china-antigua agricultura mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'fanchen-pian-ye',
  link: 'https://www.novelupdates.com/series/the-culinary-tycoon/',
  capitulos: '161 + 10 extras'
},

{
  titulo: 'El gran propietario',
  ingles: 'The Big Landlord',
  slug: 'El_gran_propietario',
  imagen: 'El_gran_propietario.jpg',
  tags: 'danmei pendiente china-antigua aristocracia matrimonio-arreglado r18 realeza transmigracion',
  autor: 'yin-ya',
  link: 'https://www.novelupdates.com/series/the-big-landlord/',
  capitulos: '103'
},

{
  titulo: 'El emperador sumiso',
  ingles: 'The Submissive Emperor',
  slug: 'El_emperador_sumiso',
  imagen: 'El_emperador_sumiso.jpg',
  tags: 'danmei pendiente china-antigua comedia matrimonio-arreglado protagonista-gong realeza',
  autor: 'lu-ye-qian-he',
  link: 'https://www.novelupdates.com/series/the-submissive-emperor/comment-page-2/?pg=1&grr=1',
  capitulos: '99 + 4 extras'
},

{
  titulo: 'El camino del contraataque de carne de cañón',
  ingles: 'The Path of the Cannon Fodder’s Counterattack',
  slug: 'El_camino_del_contraataque_de_carne_de_cañón',
  imagen: 'El_camino_del_contraataque_de_carne_de_cañón.jpg',
  tags: 'danmei pendiente china-antigua realeza renacimiento transportado-a-otro-mundo',
  autor: 'mao-niao',
  link: 'https://www.novelupdates.com/series/the-path-of-the-cannon-fodders-counterattack/',
  capitulos: '71'
},

{
  titulo: 'Diario de la esposa mimada del tirano',
  ingles: 'Tyrant Pampering Wife Diary',
  slug: 'Diario_de_la_esposa_mimada_del_tirano',
  imagen: 'Diario_de_la_esposa_mimada_del_tirano.jpg',
  tags: 'danmei pendiente china-antigua comedia matrimonio mpreg realeza renacimiento venganza yandere',
  autor: 'yi-ri-zhi-qian',
  link: 'https://www.novelupdates.com/series/tyrant-pampering-wife-diary/',
  capitulos: '79 + 1 extra'
},

{
  titulo: 'Después de que el Gong carne de cañon comenzara a cultivar, tuvo HE con el protagonista masculino frío',
  ingles: 'After Cannon Fodder Gong Started Farming, He Had HE With the Cold Male Protagonist',
  slug: 'Después_de_que_el_Gong_carne_de_cañon_comenzara_a_cultivar,_tuvo_HE_con_el_protagonista_masculino_frío',
  imagen: 'Después_de_que_el_Gong_carne_de_cañon_comenzara_a_cultivar,_tuvo_HE_con_el_protagonista_masculino_frío.jpg',
  tags: 'danmei pendiente china-antigua discapacidad mpreg protagonista-gong slice-of-life transmigracion',
  autor: 'dan-xueqing',
  link: 'https://www.novelupdates.com/series/after-cannon-fodder-gong-started-farming-he-had-he-with-the-cold-male-protagonist/',
  capitulos: '111 + 4 extras'
},

{
  titulo: 'Cariño especial',
  ingles: 'Special Fondness',
  slug: 'Cariño_especial',
  imagen: 'Cariño_especial.jpg',
  tags: 'danmei pendiente china-antigua matrimonio-arreglado smut',
  autor: 'du-mao-cai',
  link: 'https://www.novelupdates.com/series/special-fondness/',
  capitulos: '26 + 5 extras'
},

{
  titulo: 'Mi cereza explotará en el Apocalipsis',
  ingles: 'My Cherry Will Explode in the Apocalypse',
  slug: 'Mi_cereza_explotará_en_el_Apocalipsis',
  imagen: 'Mi_cereza_explotará_en_el_Apocalipsis.jpg',
  tags: 'danmei pendiente apocalipsis renacimiento slice-of-life zombies',
  autor: 'yan-chu',
  link: 'https://www.novelupdates.com/series/my-cherry-will-explode-in-the-apocalypse/',
  capitulos: '112 + 1 extra'
},

{
  titulo: 'Esposa zombi número uno',
  ingles: 'Number One Zombie Wife',
  slug: 'Esposa_zombi_número_uno',
  imagen: 'Esposa_zombi_número_uno.jpg',
  tags: 'danmei pendiente apocalipsis amnesia comedia enemigos-a-amantes mpreg no-humano renacimiento sobrenatural transmigracion zombies',
  autor: 'jin-yuanbao',
  link: 'https://www.novelupdates.com/series/number-one-zombie-wife/',
  capitulos: '376'
},

{
  titulo: 'El renacimiento de los últimos días y el regreso de [Fang] Hao',
  ingles: 'The Rebirth of the Last Days and Return to [Fang] Hao',
  slug: 'El_renacimiento_de_los_últimos_días_y_el_regreso_de_[Fang]_Hao',
  imagen: 'El_renacimiento_de_los_últimos_días_y_el_regreso_de_[Fang]_Hao.jpg',
  tags: 'danmei pendiente apocalipsis protagonista-gong renacimiento slice-of-life zombies',
  autor: 'nuan-he',
  link: 'https://www.novelupdates.com/series/the-rebirth-of-the-last-days-and-return-to-fang-hao/',
  capitulos: '200 + 1 extra'
},

{
  titulo: 'Después de cepillar la cara al jefe del Apocalipsis durante 363 días',
  ingles: 'After Brushing Face At The Apocalypse’s Boss For 363 Days',
  slug: 'Después_de_cepillar_la_cara_al_jefe_del_Apocalipsis_durante_363_días',
  imagen: 'Después_de_cepillar_la_cara_al_jefe_del_Apocalipsis_durante_363_días.jpg',
  tags: 'danmei pendiente apocalipsis comedia inteligencia-artificial malentendidos no-humano transportado-a-otro-mundo zombies',
  autor: 'da-yuan-zi',
  link: 'https://www.novelupdates.com/series/after-brushing-face-at-the-apocalypses-boss-for-363-days/',
  capitulos: '97 + 1 extra'
},

{
  titulo: 'De vuelta al Apocalipsis: El renacimiento de Bai Jing',
  ingles: 'Back to the Apocalypse: The Rebirth of Bai Jing',
  slug: 'De_vuelta_al_Apocalipsis_El_renacimiento_de_Bai_Jing',
  imagen: 'De_vuelta_al_Apocalipsis_El_renacimiento_de_Bai_Jing.jpg',
  tags: 'danmei pendiente apocalipsis protagonista-op r18 renacimiento slice-of-life yandere zombies',
  autor: 'ye-yo',
  link: 'https://www.novelupdates.com/series/back-to-the-apocalypse/',
  capitulos: '130 + 3 extras'
},

{
  titulo: 'Contraataque de un Loto Blanco que renació en un Apocalipsis',
  ingles: 'Counterattack of a White Lotus that was Reborn into an Apocalypse',
  slug: 'Contraataque_de_un_Loto_Blanco_que_renació_en_un_Apocalipsis',
  imagen: 'Contraataque_de_un_Loto_Blanco_que_renació_en_un_Apocalipsis.jpg',
  tags: 'danmei pendiente apocalipsis comedia cultivo malentendidos protagonista-gong sobrenatural transmigracion zombies',
  autor: 'suiyue-dadao-liu',
  link: 'https://www.novelupdates.com/series/counterattack-of-a-white-lotus-that-was-reborn-into-an-apocalypse/',
  capitulos: '79 + 3 extras'
},

{
  titulo: 'De vuelta al campo',
  ingles: 'Back to the Countryside',
  slug: 'De_vuelta_al_campo',
  imagen: 'De_vuelta_al_campo.jpg',
  tags: 'danmei finalizado china-antigua agricultura ger matrimonio mpreg protagonista-gong slice-of-life',
  autor: 'bei-ming-chi',
  link: 'https://drive.google.com/drive/u/4/folders/1eSU_oQRfmYBKDchkDlzfKZlAy24wmOyu',
  capitulos: '98'
},

{
  titulo: 'El segundo protagonista masculino enamorado no existe [Transmigración al libro]',
  ingles: 'The Infatuated Second Male Lead Doesn’t Exist [Transmigration into Book]',
  slug: 'El_segundo_protagonista_masculino_enamorado_no_existe_[Transmigración_al_libro]',
  imagen: 'El_segundo_protagonista_masculino_enamorado_no_existe_[Transmigración_al_libro].jpg',
  tags: 'danmei finalizado moderno discapacidad drama espectaculo protagonista-gong transmigracion',
  autor: 'bei-ming-chi',
  link: 'https://drive.google.com/drive/u/4/folders/1cvdSERxyc98zbEzwwtvUTXXyf_ssShyT',
  capitulos: '88 + 2 extras'
},

{
  titulo: 'Cómo decir "Te amo"',
  ingles: 'How To Say I Love You',
  slug: 'Cómo_decir_Te_amo',
  imagen: 'Cómo_decir_Te_amo.jpg',
  tags: 'danmei finalizado moderno drama espectaculo r18',
  autor: 'feng-liu-shu-dai',
  link: 'https://drive.google.com/drive/u/4/folders/1Z_DrP3bBM74J2Jv54MdGwt0XWtN0SkA7',
  capitulos: '136 + 1 extra'
},

{
  titulo: 'El PNJ de la novela abusiva se está relajando [Transmigración rápida]',
  ingles: 'The NPC in the Abusive Novel is Slacking Off [Quick Transmigration]',
  slug: 'El_PNJ_de_la_novela_abusiva_se_está_relajando_[Transmigración_rápida]',
  imagen: 'El_PNJ_de_la_novela_abusiva_se_está_relajando_[Transmigración_rápida].jpg',
  tags: 'danmei en-proceso multiples-mundos inteligencia-artificial matrimonio multiples-protagonistas no-humano omegaverse protagonista-gong realeza sistema transmigracion zerg',
  autor: 'Wo-suan-shenme-xiao-binggan',
  link: 'https://drive.google.com/drive/u/4/folders/1fgpUyq6OhXea3G40AJz0s9maYq6d4vmH',
  capitulos: '408'
},

{
  titulo: 'Después de que los maridos gemelos intercambiaron sus vidas',
  ingles: 'After the Twin Husbands Swapped Lives',
  slug: 'Después_de_que_los_maridos_gemelos_intercambiaron_sus_vidas',
  imagen: 'Después_de_que_los_maridos_gemelos_intercambiaron_sus_vidas.jpg',
  tags: 'danmei en-proceso china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life',
  autor: 'yu-chun',
  link: 'https://drive.google.com/drive/u/4/folders/1hV4WxOGqw-HxSgTX-WebDvIF6eKepRVi',
  capitulos: '203 + 64 extras'
},

{
  titulo: 'Sobre las mil posturas reconstruidas por los canallas',
  ingles: 'On the Thousand Postures Reconstructed by the Scumbags',
  slug: 'Sobre_las_mil_posturas_reconstruidas_por_los_canallas',
  imagen: 'Sobre_las_mil_posturas_reconstruidas_por_los_canallas.jpg',
  tags: 'danmei mtl multiples-mundos comedia no-humano protagonista-gong sistema transmigracion',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/19u33SrGF4YNumqoBM0DrHI3n3agbyr8f',
  capitulos: '263'
},

{
  titulo: 'El rescate del trágico villano está en progreso',
  ingles: 'The Rescue Of The Tragic Villain Is In Progress',
  slug: 'El_rescate_del_trágico_villano_está_en_progreso',
  imagen: 'El_rescate_del_trágico_villano_está_en_progreso.jpg',
  tags: 'danmei en-proceso multiples-mundos comedia discapacidad ger inteligencia-artificial lucha-de-poder multiples-protagonistas no-humano sistema transmigracion zerg',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1cDMUww0vX0FpzdgiUdLFiHxpX2ipZZSH',
  capitulos: '287'
},

{
  titulo: 'En el futuro, todo mi cuerpo es un tesoro',
  ingles: 'In the Future, My Whole Body is a Treasure',
  slug: 'En_el_futuro,_todo_mi_cuerpo_es_un_tesoro',
  imagen: 'En_el_futuro,_todo_mi_cuerpo_es_un_tesoro.jpg',
  tags: 'danmei finalizado futurista comedia cultivo matrimonio-arreglado mpreg ninos no-humano shota transportado-a-otro-mundo',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/19r49bH2_LKRPSR88XdyAPm5-YFFIsyHa',
  capitulos: '120 + 4 extras'
},

{
  titulo: 'Un nido de serpientes dentro de una tumba antigua',
  ingles: 'A Guide to Raising Your Natural Enemy',
  slug: 'Un_nido_de_serpientes_dentro_de_una_tumba_antigua',
  imagen: 'Un_nido_de_serpientes_dentro_de_una_tumba_antigua.jpg',
  tags: 'danmei finalizado fantasia animales comedia mpreg no-humano reencarnacion',
  autor: 'gu-zhong-ran',
  link: 'https://drive.google.com/drive/u/4/folders/1Zc03hDMnivNaPoL0ajZcvXWosQmJZdJl',
  capitulos: '115 + 3 extras'
},

{
  titulo: 'Xiao Jiu',
  ingles: 'Xiao Jiu',
  slug: 'Xiao_Jiu',
  imagen: 'Xiao_Jiu.jpg',
  tags: 'danmei finalizado china-antigua malentendidos matrimonio realeza smut',
  autor: 'xu-banxian',
  link: 'https://drive.google.com/drive/u/4/folders/1qaVTt-B19U3Bp0zV9F_b7SUbJfVEgtPm',
  capitulos: '25 + 1 extra'
},

{
  titulo: 'Vengo de lejos entre los Zerg',
  ingles: 'I Come from Afar Within the Zerg',
  slug: 'Vengo_de_lejos_entre_los_Zerg',
  imagen: 'Vengo_de_lejos_entre_los_Zerg.jpg',
  tags: 'danmei finalizado futurista aristocracia multiples-protagonistas protagonista-gong realeza transportado-a-otro-mundo zerg',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1S1lA-ryJqQ7cjxJF5N95OGn8jzl4nRvC',
  capitulos: '229 + 4 extras'
},

{
  titulo: 'Usa rápidamente la cara del diablo',
  ingles: 'Quickly Wear the Face of the Devil',
  slug: 'Usa_rápidamente_la_cara_del_diablo',
  imagen: 'Usa_rápidamente_la_cara_del_diablo.jpg',
  tags: 'danmei finalizado multiples-mundos drama protagonista-op smut transmigracion venganza yandere',
  autor: 'feng-liu-shu-dai',
  link: 'https://drive.google.com/drive/u/4/folders/19baWW1tZ1JMTG3Pe1o7b9bPl84qON2fr',
  capitulos: '259'
},

{
  titulo: 'Una guía para criar a tu enemigo natural',
  ingles: 'A Guide to Raising Your Natural Enemy',
  slug: 'Una_guía_para_criar_a_tu_enemigo_natural',
  imagen: 'Una_guía_para_criar_a_tu_enemigo_natural.jpg',
  tags: 'danmei finalizado futurista comedia cultivo hombres-bestia maestro-discipulo matrimonio mpreg ninos transportado-a-otro-mundo',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1U3EeONqRhclwzLUFmsB2v6gLpi98ijdx',
  capitulos: '130'
},

{
  titulo: 'Transmigrado en el esposo de un herrero',
  ingles: 'Transmigrated into a Blacksmith’s Husband',
  slug: 'Transmigrado_en_el_esposo_de_un_herrero',
  imagen: 'Transmigrado_en_el_esposo_de_un_herrero.jpg',
  tags: 'danmei finalizado china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life transmigracion',
  autor: 'yao-zhi',
  link: 'https://drive.google.com/drive/u/4/folders/1qmHQP4TubAuT7yOpr-U3-OxwbyeDJoj6',
  capitulos: '60'
},

{
  titulo: 'Todo el mundo sabe que soy una buena persona',
  ingles: 'Everyone Knows I’m a Good Person',
  slug: 'Todo_el_mundo_sabe_que_soy_una_buena_persona',
  imagen: 'Todo_el_mundo_sabe_que_soy_una_buena_persona.jpg',
  tags: 'danmei finalizado multiples-mundos amnesia comedia inteligencia-artificial no-humano protagonista-op sistema transmigracion',
  autor: 'tang-wei-shuai',
  link: 'https://drive.google.com/drive/u/4/folders/1_WUmbzz6b95PefD9DIjGeP2zPw9yN52v',
  capitulos: '176 + 1 extra'
},

{
  titulo: 'Te veo',
  ingles: 'I See You',
  slug: 'Te_veo',
  imagen: 'Te_veo.jpg',
  tags: 'danmei finalizado china-antigua discapacidad malentendidos matrimonio-arreglado',
  autor: 'gujin',
  link: 'https://drive.google.com/drive/u/4/folders/1HJxe1kjFjDotc0N5ExOpZaoYZr8ePczz',
  capitulos: '15'
},

{
  titulo: 'Siete días como villano',
  ingles: 'Seven Days as a Villain',
  slug: 'Siete_días_como_villano',
  imagen: 'Siete_días_como_villano.jpg',
  tags: 'danmei finalizado europa-antigua aristocracia r18 reencarnacion',
  autor: 'rirakkusu@piro',
  link: 'https://drive.google.com/drive/u/4/folders/1JiwsoPUOamXVMn7drL8T_ph-gfFIpM-1',
  capitulos: '7 + exta'
},

{
  titulo: 'Renacimiento del pequeño lobo Shou de pantalones de seda',
  ingles: 'Rebirth of the Wolfish Silkpants Bottom',
  slug: 'Renacimiento_del_pequeño_lobo_Shou_de_pantalones_de_seda',
  imagen: 'Renacimiento_del_pequeño_lobo_Shou_de_pantalones_de_seda.jpg',
  tags: 'danmei finalizado moderno drama r18 renacimiento shota slice-of-life venganza',
  autor: 'xiangchang-jun',
  link: 'https://drive.google.com/drive/u/4/folders/12npI2_1TZZ54wWHKRtv_UOyss9R11i6L',
  capitulos: '151 + 2 extras'
},

{
  titulo: 'Renacimiento de una estrella de cine',
  ingles: 'Rebirth of a Movie Star',
  slug: 'Renacimiento_de_una_estrella_de_cine',
  imagen: 'Renacimiento_de_una_estrella_de_cine.jpg',
  tags: 'danmei finalizado moderno drama espectaculo ninos renacimiento slice-of-life',
  autor: 'j112233',
  link: 'https://drive.google.com/drive/u/4/folders/1tHhEvjY1MzMTYrdlChtzYGNPZtQhj4DW',
  capitulos: '61 + 6 extras'
},

{
  titulo: 'Renacer como un sistema',
  ingles: 'Reborn As a System',
  slug: 'Renacer_como_un_sistema',
  imagen: 'Renacer_como_un_sistema.jpg',
  tags: 'danmei finalizado multiples-mundos no-humano renacimiento sistema smut transmigracion yandere',
  autor: 'your-glory',
  link: 'https://drive.google.com/drive/u/4/folders/1omYjIaudPKQucuihTgjFGvt9L96a_PZT',
  capitulos: '103 + 2 extras'
},

{
  titulo: '¡Realmente soy un Shou escoria!',
  ingles: 'I Really Am a Slag Shou!',
  slug: 'Realmente_soy_un_Shou_escoria',
  imagen: 'Realmente_soy_un_Shou_escoria.jpg',
  tags: 'danmei finalizado multiples-mundos comedia sistema transmigracion yandere',
  autor: 'your-glory',
  link: 'https://drive.google.com/drive/u/4/folders/1y5C5GUJj1bAwebaUyNaSmr09QdpWRNv3',
  capitulos: '181'
},

{
  titulo: 'Querido esposo',
  ingles: 'Beloved Husband',
  slug: 'Querido_esposo',
  imagen: 'Querido_esposo.jpg',
  tags: 'danmei finalizado multiples-mundos amnesia comedia protagonista-gong protagonista-op slice-of-life',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1N_FUeIf1eRokBG5uHJ2x6IOOdO2hFhbE',
  capitulos: '257'
},

{
  titulo: '¿Por qué los protagonistas Gong y Shou pelean por mí?',
  ingles: 'Why are the Protagonist Gong and Shou Fighting Because of Me?',
  slug: 'Por_qué_los_protagonistas_Gong_y_Shou_pelean_por_mí',
  imagen: 'Por_qué_los_protagonistas_Gong_y_Shou_pelean_por_mí.jpg',
  tags: 'danmei finalizado futurista comedia ger malentendidos omegaverse',
  autor: 'tian-huafang',
  link: 'https://drive.google.com/drive/u/4/folders/1hTuxgDRCCfw7a0wpuSD6MCBI3o7C36m0',
  capitulos: '134 + 15 extras'
},

{
  titulo: 'Por el bien de su pareja, incluso este villano puede cambiar de rol',
  ingles: 'For the Sake of His Partner, Even This Villain Can Change Roles',
  slug: 'Por_el_bien_de_su_pareja,_incluso_este_villano_puede_cambiar_de_rol',
  imagen: 'Por_el_bien_de_su_pareja,_incluso_este_villano_puede_cambiar_de_rol.jpg',
  tags: 'danmei finalizado multiples-mundos multiples-protagonistas no-humano sobrenatural transmigracion',
  autor: 'zhao-yexi',
  link: 'https://drive.google.com/drive/u/4/folders/15lRDAruf9ESJjxZeDVemS-RkxO2RSMxL',
  capitulos: '244'
},

{
  titulo: 'Pequeño tonto',
  ingles: 'Little Fool',
  slug: 'Pequeño_tonto',
  imagen: 'Pequeño_tonto.jpg',
  tags: 'danmei finalizado china-antigua discapacidad ger matrimonio smut',
  autor: 'xiaoshi-nan-ji',
  link: 'https://drive.google.com/drive/u/4/folders/1f1bTd0tsNmKdJ_M-KVqQ0PuxGfttIwNJ',
  capitulos: '10 + 11 extras'
},

{
  titulo: 'Omega tonto atado al sistema de rebobinado',
  ingles: 'Foolish Omega Bound to the Rewind System',
  slug: 'Omega_tonto_atado_al_sistema_de_rebobinado',
  imagen: 'Omega_tonto_atado_al_sistema_de_rebobinado.jpg',
  tags: 'danmei finalizado moderno comedia omegaverse sistema slice-of-life transmigracion',
  autor: 'mao-qiu-qiu',
  link: 'https://drive.google.com/drive/u/4/folders/1w5n48SLBsFRHAzIt_v_QYdi5iqT0U5Lr',
  capitulos: '85 + 9 extras + 3 bonos'
},

{
  titulo: 'Obligado a casarse con una placa conmemorativa',
  ingles: 'Forced to Marry a Memorial Tablet',
  slug: 'Obligado_a_casarse_con_una_placa_conmemorativa',
  imagen: 'Obligado_a_casarse_con_una_placa_conmemorativa.jpg',
  tags: 'danmei finalizado china-antigua agricultura malentendidos matrimonio-arreglado mpreg ninos sobrenatural wuxia',
  autor: 'lin-qin-ren',
  link: 'https://drive.google.com/drive/u/4/folders/1Q_h00CGFemYSok8L3OrXa2gUuHj1JkNU',
  capitulos: '60 + 5 extras'
},

{
  titulo: '¿No te gusto?',
  ingles: 'Don’t You Like Me',
  slug: 'No_te_gusto',
  imagen: 'No_te_gusto.jpg',
  tags: 'danmei finalizado moderno comedia malentendidos school-life sobrenatural',
  autor: 'lu-tianyi',
  link: 'https://drive.google.com/drive/u/4/folders/197sDfbOt_HRJ7jsnqwhRDh9XlTnxG7Uu',
  capitulos: '80 + 18 extras'
},

{
  titulo: 'No soy humano',
  ingles: 'I’m Not Human',
  slug: 'No_soy_humano',
  imagen: 'No_soy_humano.jpg',
  tags: 'danmei finalizado futurista comedia no-humano protagonista-op reencarnacion slice-of-life zerg',
  autor: 'jiuyi',
  link: 'https://drive.google.com/drive/u/4/folders/1PBu_SoysVWM0j_TdNQ4RbwUWugjuJKBJ',
  capitulos: '87 + 8 extras'
},

{
  titulo: 'No seas un hombre mantenido',
  ingles: 'Don’t Be a Kept Man',
  slug: 'No_seas_un_hombre_mantenido',
  imagen: 'No_seas_un_hombre_mantenido.jpg',
  tags: 'danmei finalizado multiples-mundos multiples-protagonistas protagonista-gong renacimiento sistema transmigracion',
  autor: 'bunker-fort',
  link: 'https://drive.google.com/drive/u/4/folders/1C882M7jTKE5MdNPh6He1tNBkkDdST4fL',
  capitulos: '186 + 5 extras'
},

{
  titulo: 'Mi marido varonil favorito',
  ingles: 'My Favorite Manly Husband',
  slug: 'Mi_marido_varonil_favorito',
  imagen: 'Mi_marido_varonil_favorito.jpg',
  tags: 'danmei finalizado china-antigua agricultura amnesia aristocracia ger matrimonio mpreg transmigracion',
  autor: 'ri-li-feng-he',
  link: 'https://drive.google.com/drive/u/4/folders/1uOQM3ynCQeWyuPbjSJxk_KH2fYR_8XLN',
  capitulos: '103 + 12 extras'
},

{
  titulo: 'Mi marido lobo',
  ingles: 'My Wolf Husband',
  slug: 'Mi_marido_lobo',
  imagen: 'Mi_marido_lobo.jpg',
  tags: 'danmei finalizado china-antigua bestias ger mpreg no-humano transmigracion',
  autor: 'wushan-you-duan-yun',
  link: 'https://drive.google.com/drive/u/4/folders/1g1yvmwd8aYF2Jbu9j2MHRwmn-Kel6iUQ',
  capitulos: '89 + 10 extras'
},

{
  titulo: 'Marido, déjame tocar tus abdominales',
  ingles: 'Husband, Let Me Touch Your Abs',
  slug: 'Marido,_déjame_tocar_tus_abdominales',
  imagen: 'Marido,_déjame_tocar_tus_abdominales.jpg',
  tags: 'danmei finalizado china-antigua agricultura ger mpreg ninos r18 slice-of-life transmigracion',
  autor: '998',
  link: 'https://drive.google.com/drive/u/4/folders/1N6RtIcB2OIfxnWFZiyPDu9736KQEtsKL',
  capitulos: '150 + 49 extras'
},

{
  titulo: 'Marca accidental',
  ingles: 'Accidental Mark',
  slug: 'Marca_accidental',
  imagen: 'Marca_accidental.jpg',
  tags: 'danmei finalizado moderno comedia espectaculo omegaverse protagonista-gong sistema slice-of-life transmigracion',
  autor: 'die-zhiling',
  link: 'https://drive.google.com/drive/u/4/folders/10rYXUKKiqRciwxnl7NFIGkE1ME9Fcd6Y',
  capitulos: '84 + 11 extras'
},

{
  titulo: 'La esposa es primero',
  ingles: 'The Wife is First',
  slug: 'La_esposa_es_primero',
  imagen: 'La_esposa_es_primero.jpg',
  tags: 'danmei finalizado china-antigua matrimonio-arreglado protagonista-gong realeza renacimiento smut venganza',
  autor: 'lu-ye-qian-he',
  link: 'https://drive.google.com/drive/u/4/folders/1L7XbAHqtGv2cB9IoRcBtUIGZLzFCevxA',
  capitulos: '105 + 3 extras'
},

{
  titulo: 'La esposa del Legendario Maestro',
  ingles: 'The Legendary Master’s Wife',
  slug: 'La_esposa_del_Legendario_Maestro',
  imagen: 'La_esposa_del_Legendario_Maestro.jpg',
  tags: 'danmei finalizado cultivacion bestias cultivo no-humano transmigracion xuanhuan',
  autor: 'yin-ya',
  link: 'https://drive.google.com/drive/u/4/folders/1BXkFDqJphEwoFNN0Ou5guBDeRxNF907q',
  capitulos: '713 + 18 extras'
},

{
  titulo: 'La breve historia de ShaoWang',
  ingles: 'The Short Story of ShaoWang',
  slug: 'La_breve_historia_de_ShaoWang',
  imagen: 'La_breve_historia_de_ShaoWang.jpg',
  tags: 'danmei finalizado moderno comedia mpreg omegaverse smut',
  autor: 'bing-kuai-er',
  link: 'https://drive.google.com/drive/u/4/folders/1GBeSSCyUz9PNrvV4xOAE9LeVpJ-VwJni',
  capitulos: '58 + 12 extras'
},

{
  titulo: 'La belleza enferma se casa con un ciudadano que transmigró en un libro',
  ingles: 'The Sick Beauty Marries a Fellow Townsman Who Transmigrated into a Book',
  slug: 'La_belleza_enferma_se_casa_con_un_ciudadano_que_transmigró_en_un_libro',
  imagen: 'La_belleza_enferma_se_casa_con_un_ciudadano_que_transmigró_en_un_libro.jpg',
  tags: 'danmei finalizado china-antigua comedia lucha-de-poder malentendidos matrimonio-arreglado punto-de-vista-multiple realeza slice-of-life transmigracion venganza',
  autor: 'zeda',
  link: 'https://drive.google.com/drive/u/4/folders/1Ddjo3SFV5cjp5LfKivaiMBMeDPblpvrR',
  capitulos: '81 + 4 extras'
},

{
  titulo: 'La amada emperatriz del tirano',
  ingles: 'The Tyrant’s Beloved Empress',
  slug: 'La_amada_emperatriz_del_tirano',
  imagen: 'La_amada_emperatriz_del_tirano.jpg',
  tags: 'danmei finalizado china-antigua lucha-de-poder matrimonio-arreglado mpreg renacimiento',
  autor: 'xiu-sheng',
  link: 'https://drive.google.com/drive/u/4/folders/10H0m0hO_22ah9NK-n26xUw0rjqBvP6Bm',
  capitulos: '135 + 3 extras'
},

{
  titulo: 'Juego Cargando',
  ingles: 'Game Loading',
  slug: 'Juego_Cargando',
  imagen: 'Juego_Cargando.jpg',
  tags: 'danmei finalizado multiples-mundos comedia transmigracion yandere',
  autor: 'long-qi',
  link: 'https://drive.google.com/drive/u/4/folders/13g6RDpxcL4R3hWTVZiqNgs8-RgImOhKh',
  capitulos: '304 + 5 extras'
},

{
  titulo: 'Hogar de los zerg',
  ingles: 'Home of the Zerg',
  slug: 'Hogar_de_los_zerg',
  imagen: 'Hogar_de_los_zerg.jpg',
  tags: 'danmei finalizado futurista matrimonio mpreg ninos no-humano protagonista-gong slice-of-life transmigracion zerg',
  autor: 'heng-heng',
  link: 'https://drive.google.com/drive/u/4/folders/1Np_fp34kMWUeoIblm0rmvWmFV6GC6KcX',
  capitulos: '45 + 12 extras'
},

{
  titulo: 'Gallo x gallo',
  ingles: '',
  slug: 'Gallo_x_gallo',
  imagen: 'Gallo_x_gallo.jpg',
  tags: 'danmei finalizado china-antigua animales comedia mpreg no-humano omegaverse smut',
  autor: 'tian-mu-you',
  link: 'https://drive.google.com/drive/u/4/folders/1lRvvNW4mQjMtaiF3hkvkCsR5Hk1svF0I',
  capitulos: ''
},

{
  titulo: 'Especies raras interestelares',
  ingles: 'Interstellar Rare Species',
  slug: 'Especies_raras_interestelares',
  imagen: 'Especies_raras_interestelares.jpg',
  tags: 'danmei finalizado futurista discapacidad hombres-bestia matrimonio mpreg transportado-a-otro-mundo',
  autor: 'hanmen-yatou',
  link: 'https://drive.google.com/drive/u/4/folders/13ku_FokV0XO575-XfopxFE7vDACoRSj5',
  capitulos: '76 + 3 extras'
},

{
  titulo: 'Enamorado',
  ingles: 'In Love',
  slug: 'Enamorado',
  imagen: 'Enamorado.jpg',
  tags: 'danmei finalizado multiples-mundos amnesia comedia espectaculo omegaverse protagonista-gong transformacion-animal',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1Z29lrxIhS22-pY3kdKv2GrCsTvxH9F0S',
  capitulos: '195'
},

{
  titulo: 'El único marido feo favorito',
  ingles: 'The Only Favourite Ugly Husband',
  slug: 'El_único_marido_feo_favorito',
  imagen: 'El_único_marido_feo_favorito.jpg',
  tags: 'danmei finalizado china-antigua agricultura ger matrimonio ninos protagonista-gong slice-of-life',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1OvnvHyK7yQpTu6_vDnC4i1IWkpNtlohl',
  capitulos: '180'
},

{
  titulo: 'El tonto gong renació',
  ingles: 'The Foolish Gong was Reborn',
  slug: 'El_tonto_gong_renació',
  imagen: 'El_tonto_gong_renació.jpg',
  tags: 'danmei finalizado moderno comedia matrimonio protagonista-gong renacimiento school-life',
  autor: 'duo-jin-shaonu-mao',
  link: 'https://drive.google.com/drive/u/4/folders/1MkRt4bdx6oYvIjiiOKiUaPD-J8w7zrzM',
  capitulos: '119 + 7 extras'
},

{
  titulo: 'El rico y honorable ChangAn',
  ingles: 'The Rich And Honorable ChangAn',
  slug: 'El_rico_y_honorable_ChangAn',
  imagen: 'El_rico_y_honorable_ChangAn.jpg',
  tags: 'danmei finalizado china-antigua drama lucha-de-poder matrimonio-arreglado mpreg realeza',
  autor: 'wu-duo-yun',
  link: 'https://drive.google.com/drive/u/4/folders/1nM3-hkKg3yw7yvjFQwf2ETxV7U9TFd4u',
  capitulos: '79 + 1 extra'
},

{
  titulo: 'El rascador divino del gato blanco',
  ingles: 'The White Cat’s Divine Scratching Post',
  slug: 'El_rascador_divino_del_gato_blanco',
  imagen: 'El_rascador_divino_del_gato_blanco.jpg',
  tags: 'danmei finalizado cultivacion bestias comedia cultivo maestro-discipulo mascotas no-humano protagonista-gong smut xianxia yandere',
  autor: 'lu-ye-qian-he',
  link: 'https://drive.google.com/drive/u/4/folders/1VUM7dNvO5VeJn_Z824fTJxdVGbDOE6CR',
  capitulos: '126 + 5 extras'
},

{
  titulo: 'El pez palmera mascota del tirano discapacitado [Transmigración]',
  ingles: 'The Disabled Tyrant’s Pet Palm Fish [Transmigration]',
  slug: 'El_pez_palmera_mascota_del_tirano_discapacitado_[Transmigración]',
  imagen: 'El_pez_palmera_mascota_del_tirano_discapacitado_[Transmigración].jpg',
  tags: 'danmei finalizado china-antigua comedia discapacidad lucha-de-poder mascotas matrimonio mpreg ninos no-humano realeza sistema transformacion-animal transmigracion',
  autor: 'xueshan-fei-hu',
  link: 'https://drive.google.com/drive/u/4/folders/1nA6cgtLV78sHemShM8oLYfwRx9XGR0gZ',
  capitulos: '156'
},

{
  titulo: 'El pervertido y el yandere',
  ingles: 'The Pervert and the Yandere',
  slug: 'El_pervertido_y_el_yandere',
  imagen: 'El_pervertido_y_el_yandere.jpg',
  tags: 'danmei finalizado moderno protagonista-gong smut transportado-a-otro-mundo yandere',
  autor: 'heng-heng',
  link: 'https://drive.google.com/drive/u/4/folders/1Sf-PUYwpYYGVycWLGrhWmXbYbkzNb66L',
  capitulos: '13'
},

{
  titulo: 'El mayordomo demonio sigue motivado hoy',
  ingles: 'The Demon Butler Is Still Motivated Today',
  slug: 'El_mayordomo_demonio_sigue_motivado_hoy',
  imagen: 'El_mayordomo_demonio_sigue_motivado_hoy.jpg',
  tags: 'danmei finalizado futurista no-humano sistema transportado-a-otro-mundo',
  autor: 'daozhang-danfei',
  link: 'https://drive.google.com/drive/u/4/folders/19sB8kUcXy9o0lLYnK9AVjEfqu_XiEWgG',
  capitulos: '102 + 4 extras'
},

{
  titulo: 'El lector y el protagonista definitivamente tienen que estar en un amor verdadero',
  ingles: 'The Reader and Protagonist Definitely Have to Be in True Love',
  slug: 'El_lector_y_el_protagonista_definitivamente_tienen_que_estar_en_un_amor_verdadero',
  imagen: 'El_lector_y_el_protagonista_definitivamente_tienen_que_estar_en_un_amor_verdadero.jpg',
  tags: 'danmei finalizado fantasia comedia discapacidad no-humano smut transportado-a-otro-mundo yandere',
  autor: 'tui',
  link: 'https://drive.google.com/drive/u/4/folders/1NL9uB9ycejHqiZJGZQ4_ezvGIYC0G65U',
  capitulos: '93 + 3 extras'
},

{
  titulo: 'El héroe helado anhela el amor',
  ingles: 'The Icy Hero is Yearning for Love',
  slug: 'El_héroe_helado_anhela_el_amor',
  imagen: 'El_héroe_helado_anhela_el_amor.jpg',
  tags: 'danmei finalizado europa-antigua drama punto-de-vista-multiple reencarnacion smut yandere',
  autor: 'momose-wasabi',
  link: 'https://drive.google.com/drive/u/4/folders/1iG5kNbFeT8Ml1Fr4Mt-h1Ypbzro-TqXX',
  capitulos: '13 + 7 extras'
},

{
  titulo: '¡El guion no es así!',
  ingles: 'The Script is Not Like This!',
  slug: 'El_guion_no_es_así',
  imagen: 'El_guion_no_es_así.jpg',
  tags: 'danmei finalizado multiples-mundos comedia protagonista-gong smut transmigracion',
  autor: 'ziwuyueyuan',
  link: 'https://drive.google.com/drive/u/4/folders/1B6NM5-1B1Junnr5qyUxuq2jHieYwJyPG',
  capitulos: '19'
},

{
  titulo: 'El gato domesticado del emperador zombi',
  ingles: 'The Zombie Emperor’s Domesticated Cat',
  slug: 'El_gato_domesticado_del_emperador_zombi',
  imagen: 'El_gato_domesticado_del_emperador_zombi.jpg',
  tags: 'danmei finalizado apocalipsis cultivo mascotas no-humano renacimiento sobrenatural transformacion-animal zombies',
  autor: 'shuishan',
  link: 'https://drive.google.com/drive/u/4/folders/1xS1P0fKoxmsGdgFDHn6uKq5T3afCEDKU',
  capitulos: '95 + 2 extras'
},

{
  titulo: 'El Dragón y la "Princesa"',
  ingles: '"The Dragon and the &quot;Princess&quot;"',
  slug: 'El_Dragón_y_la_Princesa',
  imagen: 'El_Dragón_y_la_Princesa.jpg',
  tags: 'danmei finalizado europa-antigua gender-bender mpreg no-humano smut realeza',
  autor: 'some-wailing',
  link: 'https://drive.google.com/drive/u/4/folders/1V3YQazpGXUbK3WJW7lsozuzaxbwKQmj1',
  capitulos: '10'
},

{
  titulo: 'El código de práctica del Otaku Renacido para el Apocalipsis',
  ingles: 'The Reborn Otaku’s Code of Practice for the Apocalypse',
  slug: 'El_código_de_práctica_del_Otaku_Renacido_para_el_Apocalipsis',
  imagen: 'El_código_de_práctica_del_Otaku_Renacido_para_el_Apocalipsis.jpg',
  tags: 'danmei finalizado apocalipsis agricultura comedia renacimiento slice-of-life zombies',
  autor: 'warm-charge',
  link: 'https://drive.google.com/drive/u/4/folders/1EGLuxZ8TRZ_QUkUke-r6oGunvcR-BySv',
  capitulos: '259'
},

{
  titulo: 'El amante leal del príncipe',
  ingles: 'The Prince’s Loyal Lover',
  slug: 'El_amante_leal_del_príncipe',
  imagen: 'El_amante_leal_del_príncipe.jpg',
  tags: 'danmei finalizado china-antigua comedia realeza transmigracion',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/1RoLYsMM1ZqwcoVmCoq5b4BQsvZADEjFS',
  capitulos: '5 + 1 extra'
},

{
  titulo: 'Diario de crianza del esposo de la Edad de Piedra',
  ingles: 'Stone Age Husband Raising Journal',
  slug: 'Diario_de_crianza_del_esposo_de_la_Edad_de_Piedra',
  imagen: 'Diario_de_crianza_del_esposo_de_la_Edad_de_Piedra.jpg',
  tags: 'danmei finalizado tribal agricultura comedia compromiso-roto cultivo hombres-bestia protagonista-gong slice-of-life transmigracion',
  autor: 'jue-jue',
  link: 'https://drive.google.com/drive/u/4/folders/18e32PD6y8n3MGWF75hzZbxpSpdiCEScK',
  capitulos: '161 + 20 extras'
},

{
  titulo: 'Desterrado a otro mundo',
  ingles: 'Banished to Another World',
  slug: 'Desterrado_a_otro_mundo',
  imagen: 'Desterrado_a_otro_mundo.jpg',
  tags: 'danmei finalizado tribal agricultura enemigos-a-amantes mpreg ninos sistema transmigracion',
  autor: 'yi-ren-bei',
  link: 'https://drive.google.com/drive/u/4/folders/1rlQo7n5z-7U2iqRDwA3W9XTn44oqtx0m',
  capitulos: '649 + 10 extras'
},

{
  titulo: 'Después de ser obligada a casarse con el malvado general estelar',
  ingles: 'After Being Forced to Marry the Evil Star General',
  slug: 'Después_de_ser_obligada_a_casarse_con_el_malvado_general_estelar',
  imagen: 'Después_de_ser_obligada_a_casarse_con_el_malvado_general_estelar.jpg',
  tags: 'danmei finalizado china-antigua comedia drama lucha-de-poder matrimonio-arreglado',
  autor: 'gu-sanyue',
  link: 'https://drive.google.com/drive/u/4/folders/18089PCokjfiFSJbsImYbLAYYLxU-qhWp',
  capitulos: '92 + 13 extras'
},

{
  titulo: 'Después de que el dios discapacitado de la guerra se convirtió en mi concubina',
  ingles: 'After the Disabled God of War Became My Concubine',
  slug: 'Después_de_que_el_dios_discapacitado_de_la_guerra_se_convirtió_en_mi_concubina',
  imagen: 'Después_de_que_el_dios_discapacitado_de_la_guerra_se_convirtió_en_mi_concubina.jpg',
  tags: 'danmei finalizado china-antigua discapacidad drama lucha-de-poder malentendidos matrimonio-arreglado realeza transmigracion',
  autor: 'liu-gou-hua',
  link: 'https://drive.google.com/drive/u/4/folders/1e2XTCvDgBeQtGVkfJ14f_GpAmot3daHd',
  capitulos: '123 + 13 extras'
},

{
  titulo: 'Después de engañar a Shizun para que practicara el cultivo dual, me escapé con su bollo',
  ingles: 'After Deceiving Shizun into Dual Cultivating, I Ran Away With His Bun',
  slug: 'Después_de_engañar_a_Shizun_para_que_practicara_el_cultivo_dual,_me_escapé_con_su_bollo',
  imagen: 'Después_de_engañar_a_Shizun_para_que_practicara_el_cultivo_dual,_me_escapé_con_su_bollo.jpg',
  tags: 'danmei finalizado cultivacion comedia cultivo mpreg ninos sistema transmigracion xianxia',
  autor: 'gongzi-rou',
  link: 'https://drive.google.com/drive/u/4/folders/1Kra26k154tOZ5Jw6cCwiglzgh5nAg-lT',
  capitulos: '73 + 3 extras'
},

{
  titulo: '¡¡¡Yo, vuestro Emperador, he sido agraviado!!!',
  ingles: 'I, Your Emperor, Have Been Wronged!!!!!!',
  slug: 'Yo,_vuestro_Emperador,_he_sido_agraviado',
  imagen: 'Yo,_vuestro_Emperador,_he_sido_agraviado.jpg',
  tags: 'danmei finalizado china-antigua comedia realeza reencarnacion sistema transmigracion',
  autor: 'pu-zuoyou',
  link: 'https://drive.google.com/drive/u/4/folders/1dVq6nIn16AAhGVmtMZ7rKuI-CzQ8MXwf',
  capitulos: '67 + 16 extras'
},

{
  titulo: 'Asociación de crianza de cachorros',
  ingles: 'Cub Raising Association',
  slug: 'Asociación_de_crianza_de_cachorros',
  imagen: 'Asociación_de_crianza_de_cachorros.jpg',
  tags: 'danmei finalizado futurista ninos no-humano transportado-a-otro-mundo',
  autor: 'jiuyi',
  link: 'https://drive.google.com/drive/u/4/folders/1oaV3wT844Lb5_m7D-2IG7Br_0iOxVT91',
  capitulos: '130'
},

{
  titulo: 'Amante del papel',
  ingles: 'Paper Lover',
  slug: 'Amante_del_papel',
  imagen: 'Amante_del_papel.jpg',
  tags: 'danmei finalizado moderno amnesia comedia inteligencia-artificial protagonista-gong slice-of-life',
  autor: 'chu-hanyi-qing',
  link: 'https://drive.google.com/drive/u/4/folders/1I4vkkGOZnE46V5141G7rpUIkXFlgjlcr',
  capitulos: '119 + 6 extras'
},

{
  titulo: 'Después de convertirse en el demonio interior del protagonista',
  ingles: 'After Becoming the Protagonist’s Inner Demon',
  slug: 'Después_de_convertirse_en_el_demonio_interior_del_protagonista',
  imagen: 'Después_de_convertirse_en_el_demonio_interior_del_protagonista.jpg',
  tags: 'danmei finalizado cultivacion cultivo enemigos-a-amantes sistema transmigracion venganza xianxia yandere',
  autor: 'zeda',
  link: 'https://drive.google.com/drive/u/4/folders/1Herz-J4fyzDXFYhJsl1nwC_5krrYv8n8',
  capitulos: '123 + 2 extras'
},

{
  titulo: 'Aferrándome a mi hombre',
  ingles: 'Holding Onto My Man',
  slug: 'Aferrándome_a_mi_hombre',
  imagen: 'Aferrándome_a_mi_hombre.jpg',
  tags: 'danmei finalizado multiples-mundos amnesia cultivo no-humano drama yandere',
  autor: 'hong-yao-yao',
  link: 'https://drive.google.com/drive/u/4/folders/1_-J1je9S0GNwaMTu89A3sT4LK3iqmVHu',
  capitulos: '110'
},

{
  titulo: 'Acompañado por un tonto que se dedica a la agricultura',
  ingles: 'Accompanied by a Fool To Do Farming',
  slug: 'Acompañado_por_un_tonto_que_se_dedica_a_la_agricultura',
  imagen: 'Acompañado_por_un_tonto_que_se_dedica_a_la_agricultura.jpg',
  tags: 'danmei finalizado china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion',
  autor: 'jinxiu-yun-ran',
  link: 'https://drive.google.com/drive/u/4/folders/1GeDB5EscYq3TrAAOHf02TX3bBnW3MjEs',
  capitulos: '90'
}

];


const tarjetasHTML = novelas.map(novela => `
<div class="card"
  data-tags="${novela.tags}"
  data-autor="${novela.autor}">

  <a href="${baseRuta}novelas/${novela.slug}.html">
    <img src="${baseRuta}imagenes/${novela.imagen}"
         alt="${novela.titulo}">
  </a>

  <h3>${novela.titulo}</h3>

  <div class="links-tarjeta">
    <a href="${novela.link}"
       target="_blank"
       onclick="event.stopPropagation()">ePub</a>
  </div>

</div>
`).join("");
