const baseRuta = window.baseRuta || "";


const novelas = [

{
titulo: 'Después de que el papel secundario masculino cayera en mis brazos',
slug: "Después_de_que_el_papel_secundario_masculino_cayera_en_mis_brazos",
imagen: "Después_de_que_el_papel_secundario_masculino_cayera_en_mis_brazos.jpg",
tags: "danmei pendiente multiples-mundos amnesia cultivo espectaculo omegaverse realeza sistema transmigracion",
autor: "cheng-ling",
link: "https://www.novelupdates.com/series/after-the-male-supporting-role-fell-into-my-arms/"
},

{
titulo: 'Después de ser obligada a casarse con un marido feo',
slug: "Después_de_ser_obligada_a_casarse_con_un_marido_feo",
imagen: "Después_de_ser_obligada_a_casarse_con_un_marido_feo.jpg",
tags: "danmei pendiente china-antigua amnesia ger mpreg ninos transmigracion",
autor: "lin-qin-ren",
link: "https://www.novelupdates.com/series/after-being-forced-to-marry-an-ugly-husband/"
},

{
titulo: 'El granjero Ger en el apocalipsis',
slug: "El_granjero_Ger_en_el_apocalipsis",
imagen: "El_granjero_Ger_en_el_apocalipsis.jpg",
tags: "danmei pendiente china-antigua agricultura ger mpreg slice-of-life sobrenatural transportado-a-otro-mundo zombies",
autor: "tang-li-jian-dan",
link: "https://www.novelupdates.com/series/the-farmer-ger-in-the-apocalypse/"
},

{
titulo: 'El pequeño esposo de Lie Jiu',
slug: "El_pequeño_esposo_de_Lie_Jiu",
imagen: "El_pequeño_esposo_de_Lie_Jiu.jpg",
tags: "danmei pendiente china-antigua agricultura comedia matrimonio mpreg ninos transmigracion",
autor: "lizi-tian-tian",
link: "https://www.novelupdates.com/series/lie-jius-little-husband/"
},

{
titulo: 'El renacimiento del Ger loco',
slug: "El_renacimiento_del_Ger_loco",
imagen: "El_renacimiento_del_Ger_loco.jpg",
tags: "danmei pendiente tribal amnesia ger hombres-bestia matrimonio-arreglado mpreg transmigracion",
autor: "mao-niao",
link: "https://www.novelupdates.com/series/the-rebirth-of-crazy-ger/"
},

{
titulo: '¿Expulsaste hoy al discípulo del Loto Negro de la secta?',
slug: "Expulsaste_hoy_al_discípulo_del_Loto_Negro_de_la_secta",
imagen: "Expulsaste_hoy_al_discípulo_del_Loto_Negro_de_la_secta.jpg",
tags: "danmei pendiente cultivacion cultivo drama maestro-discipulo transmigracion xianxia",
autor: "dongbei-da-hui-lang",
link: "https://www.novelupdates.com/series/did-you-kick-the-black-lotus-disciple-out-of-sect-today/"
},

{
titulo: 'Flores en flor, tristeza silenciosa',
slug: "Flores_en_flor,_tristeza_silenciosa",
imagen: "Flores_en_flor,_tristeza_silenciosa.jpg",
tags: "danmei pendiente china-antigua comedia malentendidos smut yandere",
autor: "shui-qian-cheng",
link: "https://www.novelupdates.com/series/blooming-flowers-silent-sorrow/"
},

{
titulo: 'Hay una belleza [Vestimenta antigua moderna]',
slug: "Hay_una_belleza_[Vestimenta_antigua_moderna]",
imagen: "Hay_una_belleza_[Vestimenta_antigua_moderna].jpg",
tags: "danmei pendiente moderno comedia malentendidos matrimonio-arreglado slice-of-life transmigracion",
autor: "nian-luan",
link: "https://www.novelupdates.com/series/theres-a-beauty-ancient-wear-modern/"
},

{
titulo: 'Hay que gastar el dinero del villano antes de que se declare en bancarrota',
slug: "Hay_que_gastar_el_dinero_del_villano_antes_de_que_se_declare_en_bancarrota",
imagen: "Hay_que_gastar_el_dinero_del_villano_antes_de_que_se_declare_en_bancarrota.jpg",
tags: "danmei pendiente moderno comedia espectaculo malentendidos transmigracion",
autor: "cai-ying",
link: "https://www.novelupdates.com/series/must-spend-the-villains-money-before-he-goes-bankrupt/"
},

{
titulo: 'La sirenita embarazada del Mariscal',
slug: "La_sirenita_embarazada_del_Mariscal",
imagen: "La_sirenita_embarazada_del_Mariscal.jpg",
tags: "danmei pendiente futurista mpreg sirena transmigracion",
autor: "yan-liu-ruo-yun",
link: "https://www.novelupdates.com/series/marshals-pregnant-little-mermaid/"
},

{
titulo: 'Soy un pez salado en tiempos antiguos',
slug: "Soy_un_pez_salado_en_tiempos_antiguos",
imagen: "Soy_un_pez_salado_en_tiempos_antiguos.jpg",
tags: "danmei pendiente china-antigua comedia ger mpreg protagonista-gong realeza transmigracion",
autor: "shi-budai-wo",
link: "https://www.novelupdates.com/series/i-am-a-salted-fish-in-ancient-times/"
},

{
titulo: 'Transmigrado a un gong despreciable que mima a su marido (Agricultura)',
slug: "Transmigrado_a_un_gong_despreciable_que_mima_a_su_marido_(Agricultura)",
imagen: "Transmigrado_a_un_gong_despreciable_que_mima_a_su_marido_(Agricultura).jpg",
tags: "danmei pendiente china-antigua mpreg ninos protagonista-gong slice-of-life transmigracion",
autor: "chishang-hong-yi",
link: "https://www.novelupdates.com/series/transmigrated-into-a-scummy-gong-who-pampers-his-husband-farming/"
},

{
titulo: 'Transmigrar al desierto primitivo como un Gran Dios',
slug: "Transmigrar_al_desierto_primitivo_como_un_Gran_Dios",
imagen: "Transmigrar_al_desierto_primitivo_como_un_Gran_Dios.jpg",
tags: "danmei pendiente tribal comedia matrimonio-arreglado slice-of-life transmigracion",
autor: "da-gou-de-xiao-baozi",
link: "https://www.novelupdates.com/series/transmigrated-into-the-primitive-wilderness-as-a-great-god/"
},

{
titulo: 'Transmigrar para convertirse en esposo koi',
slug: "Transmigrar_para_convertirse_en_esposo_koi",
imagen: "Transmigrar_para_convertirse_en_esposo_koi.jpg",
tags: "danmei pendiente china-antigua agricultura amnesia bestias mpreg no-humano slice-of-life transmigracion",
autor: "chi-ling",
link: "https://www.novelupdates.com/series/transmigrated-to-become-a-koi-husband/"
},

{
titulo: 'Registros del despertar de los Zerg canalla',
slug: "Registros_del_despertar_de_los_Zerg_canalla",
imagen: "Registros_del_despertar_de_los_Zerg_canalla.jpg",
tags: "danmei pendiente futurista protagonista-gong reencarnacion slice-of-life transmigracion",
autor: "wo-suan-shenme-xiao-binggan",
link: "https://www.novelupdates.com/series/scumbag-zerg-awakening-records/"
},

{
titulo: 'Ger, tan orgulloso',
slug: "Ger,_tan_orgulloso",
imagen: "Ger,_tan_orgulloso.jpg",
tags: "danmei pendiente china-antigua agricultura mpreg protagonista-gong slice-of-life transmigracion",
autor: "jin-futu",
link: "https://www.novelupdates.com/series/ger-so-proud/"
},

{
titulo: 'Es difícil que un personaje villano no colapse',
slug: "Es_difícil_que_un_personaje_villano_no_colapse",
imagen: "Es_difícil_que_un_personaje_villano_no_colapse.jpg",
tags: "danmei pendiente cultivacion bestias cultivo malentendidos sistema transmigracion xuanhuan",
autor: "yun-feixie",
link: "https://www.novelupdates.com/series/its-hard-for-a-villain-character-not-to-collapse/"
},

{
titulo: 'Mi novio tartamudo',
slug: "Mi_novio_tartamudo",
imagen: "Mi_novio_tartamudo.jpg",
tags: "danmei pendiente moderno drama slice-of-life smut",
autor: "duhai-bushi-yisheng",
link: "https://www.novelupdates.com/series/my-stuttering-boyfriend/"
},

{
titulo: 'Estrategia del villano',
slug: "Estrategia_del_villano",
imagen: "Estrategia_del_villano.jpg",
tags: "danmei pendiente moderno comedia malentendidos school-life sistema transmigracion",
autor: "luobo-hua-tuzi",
link: "https://www.novelupdates.com/series/villains-strategy/"
},

{
titulo: 'El rectificador profesional de tres perspectivas [Transmigración]',
slug: "El_rectificador_profesional_de_tres_perspectivas_[Transmigración]",
imagen: "El_rectificador_profesional_de_tres_perspectivas_[Transmigración].jpg",
tags: "danmei pendiente moderno drama sistema transmigracion",
autor: "sang-wo",
link: "https://www.novelupdates.com/series/the-professional-three-views-rectifier-book-transmigration/"
},

{
titulo: 'Toma su mano',
slug: "Toma_su_mano",
imagen: "Toma_su_mano.jpg",
tags: "danmei pendiente multiples-mundos cultivo protagonista-gong transmigracion zombies",
autor: "jue-jue",
link: "https://www.novelupdates.com/series/hold-his-hand/"
},

{
titulo: 'Tengo un Halo de "Sistema"',
slug: "Tengo_un_Halo_de_Sistema",
imagen: "Tengo_un_Halo_de_Sistema.jpg",
tags: "danmei pendiente multiples-mundos amnesia comedia sistema transmigracion",
autor: "qian-mo-li-shang",
link: "https://www.novelupdates.com/series/i-have-a-system-halo/"
},

{
titulo: 'Una ola de ex vino a buscarme. ¡¿Qué hacer?!',
slug: "Una_ola_de_ex_vino_a_buscarme._Qué_hacer",
imagen: "Una_ola_de_ex_vino_a_buscarme._Qué_hacer.jpg",
tags: "danmei pendiente multiples-mundos comedia sistema smut transmigracion yandere",
autor: "long-qi",
link: "https://www.novelupdates.com/series/a-wave-of-exes-came-looking-for-me-what-to-do/"
},

{
titulo: 'Ser un rompecorazones en una película de terror',
slug: "Ser_un_rompecorazones_en_una_película_de_terror",
imagen: "Ser_un_rompecorazones_en_una_película_de_terror.jpg",
tags: "danmei pendiente multiples-mundos amnesia sobrenatural terror",
autor: "jiang-zhi-yu",
link: "https://www.novelupdates.com/series/to-be-a-heartthrob-in-a-horror-movie/"
},

{
titulo: '¿Planeas matarme con Meng?',
slug: "Planeas_matarme_con_Meng",
imagen: "Planeas_matarme_con_Meng.jpg",
tags: "danmei en-proceso multiples-mundos animales no-humano transmigracion",
autor: "moru-gui",
link: "https://drive.google.com/drive/u/4/folders/1tJyZvYH_yluvC8HP_trZx2bg8mcSxjqn"
},

{
titulo: 'Paquete adorable',
slug: "Paquete_adorable",
imagen: "Paquete_adorable.jpg",
tags: "danmei pendiente multiples-mundos amnesia cultivo sistema transmigracion",
autor: "qiu-shi-sha",
link: "https://www.novelupdates.com/series/lovable-package/"
},

{
titulo: 'Nunca imaginé que Long Aotian se convertiría en mi esposa [Transmigración rápida]',
slug: "Nunca_imaginé_que_Long_Aotian_se_convertiría_en_mi_esposa_[Transmigración_rápida]",
imagen: "Nunca_imaginé_que_Long_Aotian_se_convertiría_en_mi_esposa_[Transmigración_rápida].jpg",
tags: "danmei pendiente multiples-mundos amnesia cultivo no-humano omegaverse protagonista-gong sistema transmigracion zombies",
autor: "zhen-zhong-mian",
link: "https://www.novelupdates.com/series/i-never-imagined-long-aotian-would-become-my-wife-quick-transmigration/"
},

{
titulo: 'No recojas novios del basurero',
slug: "No_recojas_novios_del_basurero",
imagen: "No_recojas_novios_del_basurero.jpg",
tags: "danmei pendiente multiples-mundos sistema tragedia transmigracion",
autor: "qi-jing-nan-qu",
link: "https://www.novelupdates.com/series/dont-pick-up-boyfriends-from-the-trash-bin/"
},

{
titulo: 'No esperes a tu novio en el crematorio',
slug: "No_esperes_a_tu_novio_en_el_crematorio",
imagen: "No_esperes_a_tu_novio_en_el_crematorio.jpg",
tags: "danmei pendiente multiples-mundos amnesia comedia omegaverse protagonista-gong sistema transmigracion",
autor: "ke-zhou-qiu-ou",
link: "https://www.novelupdates.com/series/dont-wait-for-your-boyfriend-in-the-crematorium/"
},

{
titulo: 'Mis pacientes se enamoran de mí',
slug: "Mis_pacientes_se_enamoran_de_mí",
imagen: "Mis_pacientes_se_enamoran_de_mí.jpg",
tags: "danmei pendiente multiples-mundos sistema smut transmigracion yandere",
autor: "xiu-sheng",
link: "https://www.novelupdates.com/series/my-patients-fall-in-love-with-me/"
},

{
titulo: 'Me hice fanboy del villano',
slug: "Me_hice_fanboy_del_villano",
imagen: "Me_hice_fanboy_del_villano.jpg",
tags: "danmei pendiente multiples-mundos comedia cultivo malentendidos sistema transmigracion",
autor: "buzhao-yi-zi",
link: "https://www.novelupdates.com/series/i-became-a-fanboy-of-the-villain/"
},

{
titulo: 'Los Mariscales quieren divorciarse',
slug: "Los_Mariscales_quieren_divorciarse",
imagen: "Los_Mariscales_quieren_divorciarse.jpg",
tags: "danmei pendiente multiples-mundos comedia cultivo sobrenatural transmigracion yandere",
autor: "long-qi",
link: "https://www.novelupdates.com/series/the-marshals-want-to-get-divorced/"
},

{
titulo: 'La estrategia de lavar y limpiar una escoria Shou',
slug: "La_estrategia_de_lavar_y_limpiar_una_escoria_Shou",
imagen: "La_estrategia_de_lavar_y_limpiar_una_escoria_Shou.jpg",
tags: "danmei pendiente multiples-mundos amnesia sistema transmigracion zombies",
autor: "ying-amu",
link: "https://www.novelupdates.com/series/the-strategy-of-washing-clean-a-slag-shou/"
},

{
titulo: 'La carne de cañón es el rey [Transmigración rápida]',
slug: "La_carne_de_cañón_es_el_rey_[Transmigración_rápida]",
imagen: "La_carne_de_cañón_es_el_rey_[Transmigración_rápida].jpg",
tags: "danmei en-proceso multiples-mundos protagonista-gong protagonista-op sistema transmigracion venganza",
autor: "jia-zi-hai",
link: "https://drive.google.com/drive/u/4/folders/1aOjpnqUUGYQ0rRGcDEtBJa8iqq55s1k6"
},

{
titulo: 'Yo cubro las espaldas de esta carne de cañón',
slug: "Yo_cubro_las_espaldas_de_esta_carne_de_cañón",
imagen: "Yo_cubro_las_espaldas_de_esta_carne_de_cañón.jpg",
tags: "danmei pendiente multiples-mundos comedia sistema slice-of-life transmigracion",
autor: "sanqian-da-meng-xu-pingsheng",
link: "https://www.novelupdates.com/series/ive-got-this-cannon-fodders-back/"
},

{
titulo: 'Experimentar un final feliz con la escoria Shou',
slug: "Experimentar_un_final_feliz_con_la_escoria_Shou",
imagen: "Experimentar_un_final_feliz_con_la_escoria_Shou.jpg",
tags: "danmei pendiente multiples-mundos protagonista-gong smut transmigracion yandere",
autor: "moru-gui",
link: "https://www.novelupdates.com/series/experiencing-a-happy-ending-with-a-scum-shou/"
},

{
titulo: 'Estrategia para capturar esa escoria Gong',
slug: "Estrategia_para_capturar_esa_escoria_Gong",
imagen: "Estrategia_para_capturar_esa_escoria_Gong.jpg",
tags: "danmei pendiente multiples-mundos malentendidos sistema tragedia venganza yandere",
autor: "jimo-yao",
link: "https://www.novelupdates.com/series/strategy-to-capture-that-scum-gong/"
},

{
titulo: 'Esta experiencia de transmigración rápida es un poco dulce',
slug: "Esta_experiencia_de_transmigración_rápida_es_un_poco_dulce",
imagen: "Esta_experiencia_de_transmigración_rápida_es_un_poco_dulce.jpg",
tags: "danmei pendiente multiples-mundos amnesia comedia no-humano sistema transmigracion yandere",
autor: "chang-nian-jun",
link: "https://www.novelupdates.com/series/this-quick-transmigration-experience-is-a-bit-sweet/"
},

{
titulo: 'Enciende el sistema del amor',
slug: "Enciende_el_sistema_del_amor",
imagen: "Enciende_el_sistema_del_amor.jpg",
tags: "danmei pendiente multiples-mundos drama mpreg sistema transmigracion",
autor: "juzi-zhou",
link: "https://www.novelupdates.com/series/turn-on-the-love-system/"
},

{
titulo: 'En realidad, no es fácil ser un protagonista masculino secundario',
slug: "En_realidad,_no_es_fácil_ser_un_protagonista_masculino_secundario",
imagen: "En_realidad,_no_es_fácil_ser_un_protagonista_masculino_secundario.jpg",
tags: "danmei pendiente multiples-mundos bestias cultivo malentendidos no-humano realeza smut tragedia transmigracion zombies",
autor: "mijia",
link: "https://www.novelupdates.com/series/its-actually-not-easy-wanting-to-be-a-supporting-male-lead/"
},

{
titulo: 'El villano cargó mi sistema',
slug: "El_villano_cargó_mi_sistema",
imagen: "El_villano_cargó_mi_sistema.jpg",
tags: "danmei finalizado multiples-mundos amnesia comedia sistema transmigracion venganza yandere",
autor: "you-hu-qiansui",
link: "https://drive.google.com/drive/u/4/folders/1qs-c5MPxZkbmWf1I7wAh72_N-_amVVqb"
},

{
titulo: '¡El té verde siempre apunta a la persona equivocada!',
slug: "El_té_verde_siempre_apunta_a_la_persona_equivocada",
imagen: "El_té_verde_siempre_apunta_a_la_persona_equivocada.jpg",
tags: "danmei pendiente multiples-mundos no-humano omegaverse sistema transmigracion venganza zombies",
autor: "jieke-maomi",
link: "https://www.novelupdates.com/series/the-green-tea-is-always-targeting-the-wrong-person/"
},

{
titulo: 'El protagonista sólo piensa en enamorarse',
slug: "El_protagonista_sólo_piensa_en_enamorarse",
imagen: "El_protagonista_sólo_piensa_en_enamorarse.jpg",
tags: "danmei pendiente multiples-mundos cultivo multiples-protagonistas no-humano protagonista-gong sistema sobrenatural zombies",
autor: "zhu-ge-tian-zong",
link: "https://www.novelupdates.com/series/the-protagonist-only-thinks-about-falling-in-love/"
},

{
titulo: 'El plan de contraataque de un villano con diez mil fans',
slug: "El_plan_de_contraataque_de_un_villano_con_diez_mil_fans",
imagen: "El_plan_de_contraataque_de_un_villano_con_diez_mil_fans.jpg",
tags: "danmei pendiente multiples-mundos comedia cultivo omegaverse sistema yandere zombies",
autor: "conglai-bu-wen",
link: "https://www.novelupdates.com/series/the-counterattack-plan-of-a-villain-with-ten-thousand-fans/"
},

{
titulo: '¡El objetivo siempre piensa que me gusta!',
slug: "El_objetivo_siempre_piensa_que_me_gusta",
imagen: "El_objetivo_siempre_piensa_que_me_gusta.jpg",
tags: "danmei pendiente multiples-mundos comedia cultivo malentendidos sistema zombies",
autor: "zhuo-ran",
link: "https://www.novelupdates.com/series/the-target-always-thinks-that-i-like-him/"
},

{
titulo: 'El destino perfecto',
slug: "El_destino_perfecto",
imagen: "El_destino_perfecto.jpg",
tags: "danmei pendiente multiples-mundos comedia omegaverse sistema smut tragedia transmigracion yandere zombies",
autor: "xi-zixu",
link: "https://www.novelupdates.com/series/the-perfect-destiny/"
},

{
titulo: 'Cómo morir tan pesado como el monte Tai',
slug: "Cómo_morir_tan_pesado_como_el_monte_Tai",
imagen: "Cómo_morir_tan_pesado_como_el_monte_Tai.jpg",
tags: "danmei pendiente multiples-mundos amnesia cultivo omegaverse sistema sobrenatural tragedia transmigracion zombies",
autor: "mao-ba-xiansheng",
link: "https://www.novelupdates.com/series/how-to-die-as-heavy-as-mount-tai/"
},

{
titulo: 'Cómo enamorarse del villano',
slug: "Cómo_enamorarse_del_villano",
imagen: "Cómo_enamorarse_del_villano.jpg",
tags: "danmei pendiente multiples-mundos hombres-bestia mpreg multiples-protagonistas transmigracion",
autor: "han-zhang-bu-luo",
link: "https://www.novelupdates.com/series/how-to-fall-in-love-with-the-villain/"
},

{
titulo: 'Como el personaje rival gay en las novelas BG',
slug: "Como_el_personaje_rival_gay_en_las_novelas_BG",
imagen: "Como_el_personaje_rival_gay_en_las_novelas_BG.jpg",
tags: "danmei pendiente multiples-mundos amnesia cultivo drama omegaverse sistema transmigracion yandere zombies",
autor: "ying-amu",
link: "https://www.novelupdates.com/series/as-the-minor-gay-rival-in-het-novels/"
},

{
titulo: 'BOSS transmigra como una pequeña monada',
slug: "BOSS_transmigra_como_una_pequeña_monada",
imagen: "BOSS_transmigra_como_una_pequeña_monada.jpg",
tags: "danmei pendiente multiples-mundos cultivo drama no-humano omegaverse protagonista-op transmigracion venganza",
autor: "guangming-zai-an",
link: "https://www.novelupdates.com/series/boss-transmigrates-as-a-little-cutie/"
},

{
titulo: 'Aquellos años en que matamos al loto blanco',
slug: "Aquellos_años_en_que_matamos_al_loto_blanco",
imagen: "Aquellos_años_en_que_matamos_al_loto_blanco.jpg",
tags: "danmei pendiente multiples-mundos cultivo inteligencia-artificial omegaverse sistema transmigracion yandere zombies",
autor: "mo-shuo-sheng-gui",
link: "https://www.novelupdates.com/series/those-years-when-we-killed-the-white-lotus/"
},

{
titulo: 'Accidentalmente ataqué a un gran demonio',
slug: "Accidentalmente_ataqué_a_un_gran_demonio",
imagen: "Accidentalmente_ataqué_a_un_gran_demonio.jpg",
tags: "danmei pendiente multiples-mundos cultivo drama protagonista-gong sobrenatural",
autor: "tianxia-tian",
link: "https://www.novelupdates.com/series/accidentally-attacked-a-great-demon-king/"
},

{
titulo: 'Transmigrar en el amigo de la infancia carne de cañón del rompecorazones',
slug: "Transmigrar_en_el_amigo_de_la_infancia_carne_de_cañón_del_rompecorazones",
imagen: "Transmigrar_en_el_amigo_de_la_infancia_carne_de_cañón_del_rompecorazones.jpg",
tags: "danmei pendiente moderno comedia school-life sistema transmigracion",
autor: "qie-zai-shan-yang",
link: "https://www.novelupdates.com/series/transmigrating-into-the-heartthrobs-cannon-fodder-childhood-friend/"
},

{
titulo: 'Transmigrar al exnovio del protagonista masculino renacido',
slug: "Transmigrar_al_exnovio_del_protagonista_masculino_renacido",
imagen: "Transmigrar_al_exnovio_del_protagonista_masculino_renacido.jpg",
tags: "danmei pendiente moderno drama malentendidos renacimiento sistema transmigracion",
autor: "wen-yukuan",
link: "https://www.novelupdates.com/series/transmigrating-into-the-reborn-male-leads-ex-boyfriend/"
},

{
titulo: 'Transmigrado en carne de cañón de un pez gordo, la pequeña esposa mimada',
slug: "Transmigrado_en_carne_de_cañón_de_un_pez_gordo,_la_pequeña_esposa_mimada",
imagen: "Transmigrado_en_carne_de_cañón_de_un_pez_gordo,_la_pequeña_esposa_mimada.jpg",
tags: "danmei pendiente moderno ger matrimonio mpreg sistema transmigracion",
autor: "gongzi-xun-huan",
link: "https://www.novelupdates.com/series/transmigrated-into-a-big-shots-cannon-fodder-little-pampered-wife/"
},

{
titulo: 'Transmigrado como el ex del villano ciego',
slug: "Transmigrado_como_el_ex_del_villano_ciego",
imagen: "Transmigrado_como_el_ex_del_villano_ciego.jpg",
tags: "danmei pendiente moderno discapacidad matrimonio-arreglado slice-of-life transmigracion",
autor: "caolu",
link: "https://www.novelupdates.com/series/transmigrated-as-the-ex-of-the-blind-villain/"
},

{
titulo: 'Transmigrado al prometido del emperador del cine que busca la muerte',
slug: "Transmigrado_al_prometido_del_emperador_del_cine_que_busca_la_muerte",
imagen: "Transmigrado_al_prometido_del_emperador_del_cine_que_busca_la_muerte.jpg",
tags: "danmei pendiente moderno espectaculo matrimonio-arreglado mpreg ninos slice-of-life transmigracion",
autor: "lin-ang-si",
link: "https://www.novelupdates.com/series/transmigrated-into-the-film-emperors-death-seeking-fiance/"
},

{
titulo: 'Transmigrado a un ídolo escolar y obligado a hacer negocios',
slug: "Transmigrado_a_un_ídolo_escolar_y_obligado_a_hacer_negocios",
imagen: "Transmigrado_a_un_ídolo_escolar_y_obligado_a_hacer_negocios.jpg",
tags: "danmei pendiente moderno comedia malentendidos school-life sistema transmigracion venganza",
autor: "yu-wu-xiao-tian-bing",
link: "https://www.novelupdates.com/series/transmigrated-into-a-school-idol-and-forced-to-do-business/"
},

{
titulo: 'Señor Dior',
slug: "Señor_Dior",
imagen: "Señor_Dior.jpg",
tags: "danmei pendiente moderno amnesia comedia matrimonio",
autor: "lu-ye-qian-he",
link: "https://www.novelupdates.com/series/mr-dior/"
},

{
titulo: 'Segundo amor',
slug: "Segundo_amor",
imagen: "Segundo_amor.jpg",
tags: "danmei pendiente moderno discapacidad matrimonio slice-of-life smut",
autor: "zhi-zhi",
link: "https://www.novelupdates.com/series/second-love/"
},

{
titulo: 'Se casó con el hermano villano de la escoria Gong',
slug: "Se_casó_con_el_hermano_villano_de_la_escoria_Gong",
imagen: "Se_casó_con_el_hermano_villano_de_la_escoria_Gong.jpg",
tags: "danmei pendiente moderno matrimonio-arreglado slice-of-life transmigracion",
autor: "guan-hongyi",
link: "https://www.novelupdates.com/series/married-the-scum-gongs-villain-brother/"
},

{
titulo: 'Romance floreciente',
slug: "Romance_floreciente",
imagen: "Romance_floreciente.jpg",
tags: "danmei pendiente moderno malentendidos mpreg slice-of-life",
autor: "han-shu",
link: "https://www.novelupdates.com/series/blooming-romance/"
},

{
titulo: 'Rey de la música clásica',
slug: "Rey_de_la_música_clásica",
imagen: "Rey_de_la_música_clásica.jpg",
tags: "danmei pendiente moderno r18 slice-of-life transmigracion venganza",
autor: "mo-chen-huan",
link: "https://www.novelupdates.com/series/king-of-classical-music/"
},

{
titulo: 'Renacimiento: Un camino diferente',
slug: "Renacimiento_Un_camino_diferente",
imagen: "Renacimiento_Un_camino_diferente.jpg",
tags: "danmei pendiente moderno drama renacimiento smut venganza",
autor: "li-song-ru",
link: "https://www.novelupdates.com/series/rebirth-different-way/"
},

{
titulo: 'Renacimiento y redención',
slug: "Renacimiento_y_redención",
imagen: "Renacimiento_y_redención.jpg",
tags: "danmei pendiente moderno protagonista-gong renacimiento school-life",
autor: "yi-ting-mo-tong",
link: "https://www.novelupdates.com/series/rebirth-and-redemption/"
},

{
titulo: 'Renacimiento para convertirse en la esposa Omega del presidente',
slug: "Renacimiento_para_convertirse_en_la_esposa_Omega_del_presidente",
imagen: "Renacimiento_para_convertirse_en_la_esposa_Omega_del_presidente.jpg",
tags: "danmei pendiente moderno matrimonio mpreg omegaverse transmigracion",
autor: "hanmen-yatou",
link: "https://www.novelupdates.com/series/rebirth-to-become-the-presidents-omega-wife/"
},

{
titulo: 'Renacido como el gato y el perro del presidente villano',
slug: "Renacido_como_el_gato_y_el_perro_del_presidente_villano",
imagen: "Renacido_como_el_gato_y_el_perro_del_presidente_villano.jpg",
tags: "danmei pendiente moderno espectaculo mascotas matrimonio renacimiento",
autor: "lin-ang-si",
link: "https://www.novelupdates.com/series/reborn-as-the-villain-presidents-cat-dog/"
},

{
titulo: 'Renacer sólo para amarte de nuevo',
slug: "Renacer_sólo_para_amarte_de_nuevo",
imagen: "Renacer_sólo_para_amarte_de_nuevo.jpg",
tags: "danmei pendiente moderno drama matrimonio renacimiento",
autor: "yige-xiao-ping-gai",
link: "https://www.novelupdates.com/series/reborn-only-to-love-you-again/"
},

{
titulo: 'Renacer con un viejo enemigo el día de nuestro matrimonio',
slug: "Renacer_con_un_viejo_enemigo_el_día_de_nuestro_matrimonio",
imagen: "Renacer_con_un_viejo_enemigo_el_día_de_nuestro_matrimonio.jpg",
tags: "danmei pendiente moderno comedia matrimonio renacimiento school-life",
autor: "lin-zhiluo",
link: "https://www.novelupdates.com/series/reborn-with-an-old-enemy-on-the-day-of-our-marriage/"
},

{
titulo: 'Protagonista masculino 2 y Protagonista masculino 3 ¡Final feliz!',
slug: "Protagonista_masculino_2_y_Protagonista_masculino_3_Final_feliz",
imagen: "Protagonista_masculino_2_y_Protagonista_masculino_3_Final_feliz.jpg",
tags: "danmei pendiente moderno malentendidos matrimonio slice-of-life transmigracion",
autor: "feng-jiu",
link: "https://www.novelupdates.com/series/male-lead-2-and-male-lead-3-happy-ending/"
},

{
titulo: 'Préstame atención',
slug: "Préstame_atención",
imagen: "Préstame_atención.jpg",
tags: "danmei pendiente moderno comedia matrimonio omegaverse protagonista-gong school-life smut",
autor: "bing-kuai-er",
link: "https://www.novelupdates.com/series/pay-attention-to-me/"
},

{
titulo: '¡No quiero que seas responsable!',
slug: "No_quiero_que_seas_responsable",
imagen: "No_quiero_que_seas_responsable.jpg",
tags: "danmei pendiente moderno comedia matrimonio mpreg renacimiento slice-of-life",
autor: "bei-tang-mo",
link: "https://www.novelupdates.com/series/i-dont-want-you-to-be-responsible/"
},

{
titulo: 'No es fácil ser el hermano mayor de tu rival en el amor',
slug: "No_es_fácil_ser_el_hermano_mayor_de_tu_rival_en_el_amor",
imagen: "No_es_fácil_ser_el_hermano_mayor_de_tu_rival_en_el_amor.jpg",
tags: "danmei pendiente moderno comedia matrimonio renacimiento smut",
autor: "jing-feng-youzhi-cha",
link: "https://www.novelupdates.com/series/its-not-easy-being-your-love-rivals-big-brother/"
},

{
titulo: 'Mis cinco elementos te faltan',
slug: "Mis_cinco_elementos_te_faltan",
imagen: "Mis_cinco_elementos_te_faltan.jpg",
tags: "danmei pendiente moderno discapacidad matrimonio sobrenatural terror transmigracion",
autor: "xi-zixu",
link: "https://www.novelupdates.com/series/my-five-elements-lack-you/"
},

{
titulo: 'Mi viejo gong tiene amnesia',
slug: "Mi_viejo_gong_tiene_amnesia",
imagen: "Mi_viejo_gong_tiene_amnesia.jpg",
tags: "danmei pendiente moderno amnesia comedia espectaculo matrimonio no-humano slice-of-life",
autor: "su-jingxian",
link: "https://www.novelupdates.com/series/my-old-gong-has-amnesia/"
},

{
titulo: 'Mi expresión exterior es diferente de mi expresión interior',
slug: "Mi_expresión_exterior_es_diferente_de_mi_expresión_interior",
imagen: "Mi_expresión_exterior_es_diferente_de_mi_expresión_interior.jpg",
tags: "danmei pendiente moderno comedia discapacidad matrimonio sistema transmigracion",
autor: "gong-qing-han",
link: "https://www.novelupdates.com/series/my-outside-expression-is-different-from-my-inner-expression/"
},

{
titulo: 'Mi esposo sufre de una enfermedad terminal',
slug: "Mi_esposo_sufre_de_una_enfermedad_terminal",
imagen: "Mi_esposo_sufre_de_una_enfermedad_terminal.jpg",
tags: "danmei pendiente moderno discapacidad espectaculo matrimonio matrimonio-arreglado sistema transmigracion",
autor: "bu-hui-xia-qi",
link: "https://www.novelupdates.com/series/my-husband-is-suffering-from-a-terminal-illness/"
},

{
titulo: 'Mi esposa es heterosexual',
slug: "Mi_esposa_es_heterosexual",
imagen: "Mi_esposa_es_heterosexual.jpg",
tags: "danmei pendiente moderno comedia matrimonio oneshot protagonista-gong",
autor: "dongfeng-jixu",
link: "https://www.novelupdates.com/series/my-wife-is-straight/"
},

{
titulo: 'Mi amigo de la infancia sigue intentando convertirme en gay',
slug: "Mi_amigo_de_la_infancia_sigue_intentando_convertirme_en_gay",
imagen: "Mi_amigo_de_la_infancia_sigue_intentando_convertirme_en_gay.jpg",
tags: "danmei pendiente moderno matrimonio slice-of-life",
autor: "jiao-hua-qing-jiu",
link: "https://www.novelupdates.com/series/my-childhood-buddy-keeps-trying-to-turn-me-gay/"
},

{
titulo: 'Me mordieron después de transmigrar a una pseudo-beta',
slug: "Me_mordieron_después_de_transmigrar_a_una_pseudo-beta",
imagen: "Me_mordieron_después_de_transmigrar_a_una_pseudo-beta.jpg",
tags: "danmei pendiente moderno matrimonio matrimonio-arreglado mpreg omegaverse transmigracion",
autor: "lu-wei-mu",
link: "https://www.novelupdates.com/series/i-got-bitten-after-transmigrating-into-a-pseudo-beta/"
},

{
titulo: 'Me escapé después de que ese viejo rico quedara embarazado de mi hijo',
slug: "Me_escapé_después_de_que_ese_viejo_rico_quedara_embarazado_de_mi_hijo",
imagen: "Me_escapé_después_de_que_ese_viejo_rico_quedara_embarazado_de_mi_hijo.jpg",
tags: "danmei pendiente moderno comedia mpreg protagonista-gong slice-of-life transmigracion",
autor: "yun-zhi",
link: "https://www.novelupdates.com/series/i-ran-away-after-that-rich-old-man-was-pregnant-with-my-child/"
},

{
titulo: 'Los grandes jefes no son lo que esperaba después de transmigrar a un libro',
slug: "Los_grandes_jefes_no_son_lo_que_esperaba_después_de_transmigrar_a_un_libro",
imagen: "Los_grandes_jefes_no_son_lo_que_esperaba_después_de_transmigrar_a_un_libro.jpg",
tags: "danmei pendiente moderno comedia drama malentendidos transmigracion",
autor: "zhu-tang",
link: "https://www.novelupdates.com/series/the-big-bosses-are-not-what-i-expected-after-i-transmigrated-into-a-book/"
},

{
titulo: 'Juego de seducción',
slug: "Juego_de_seducción",
imagen: "Juego_de_seducción.jpg",
tags: "danmei pendiente moderno malentendidos smut",
autor: "shi-jiu-chi-cha",
link: "https://www.novelupdates.com/series/seduction-game/"
},

{
titulo: 'Hielo de frijol rojo',
slug: "Hielo_de_frijol_rojo",
imagen: "Hielo_de_frijol_rojo.jpg",
tags: "danmei pendiente moderno comedia espectaculo matrimonio slice-of-life smut",
autor: "yige-mi-bing",
link: "https://www.novelupdates.com/series/red-bean-ice/"
},

{
titulo: 'Estaba embarazado después del divorcio',
slug: "Estaba_embarazado_después_del_divorcio",
imagen: "Estaba_embarazado_después_del_divorcio.jpg",
tags: "danmei pendiente moderno drama malentendidos matrimonio-arreglado mpreg ninos omegaverse transmigracion",
autor: "juan-xin-xigua",
link: "https://www.novelupdates.com/series/i-was-pregnant-after-divorce/"
},

{
titulo: 'Esposa masculina fuertemente mimada',
slug: "Esposa_masculina_fuertemente_mimada",
imagen: "Esposa_masculina_fuertemente_mimada.jpg",
tags: "danmei pendiente moderno drama matrimonio-arreglado mpreg slice-of-life",
autor: "chijiao-xia-de-lu",
link: "https://www.novelupdates.com/series/strongly-pampered-male-wife/"
},

{
titulo: 'Epifanías del renacimiento',
slug: "Epifanías_del_renacimiento",
imagen: "Epifanías_del_renacimiento.jpg",
tags: "danmei pendiente moderno comedia malentendidos matrimonio renacimiento slice-of-life",
autor: "yuan-hegu",
link: "https://www.novelupdates.com/series/epiphanies-of-rebirth/"
},

{
titulo: 'El emperador del cine pide el divorcio todos los días',
slug: "El_emperador_del_cine_pide_el_divorcio_todos_los_días",
imagen: "El_emperador_del_cine_pide_el_divorcio_todos_los_días.jpg",
tags: "danmei pendiente moderno comedia espectaculo mpreg transmigracion",
autor: "lin-ang-si",
link: "https://www.novelupdates.com/series/the-film-emperor-asks-for-divorce-every-day/"
},

{
titulo: 'Días en que salvé mi vida al lado del Husky',
slug: "Días_en_que_salvé_mi_vida_al_lado_del_Husky",
imagen: "Días_en_que_salvé_mi_vida_al_lado_del_Husky.jpg",
tags: "danmei pendiente moderno comedia mascotas school-life sobrenatural transmigracion yandere",
autor: "yishi-hua-shang",
link: "https://www.novelupdates.com/series/life-saving-days-by-the-huskys-side/"
},

{
titulo: 'Después de un matrimonio repentino con el tirano discapacitado',
slug: "Después_de_un_matrimonio_repentino_con_el_tirano_discapacitado",
imagen: "Después_de_un_matrimonio_repentino_con_el_tirano_discapacitado.jpg",
tags: "danmei pendiente moderno discapacidad matrimonio-arreglado renacimiento venganza",
autor: "nie-si",
link: "https://www.novelupdates.com/series/after-a-flash-marriage-with-the-disabled-tyrant/"
},

{
titulo: 'Después de transmigrar hice llorar al antagonista',
slug: "Después_de_transmigrar_hice_llorar_al_antagonista",
imagen: "Después_de_transmigrar_hice_llorar_al_antagonista.jpg",
tags: "danmei pendiente moderno comedia espectaculo protagonista-gong slice-of-life transmigracion",
autor: "qiaomu-li",
link: "https://www.novelupdates.com/series/after-transmigrating-i-made-the-antagonist-cry/"
},

{
titulo: 'Después de ser transportado a un libro, adopté al villano',
slug: "Después_de_ser_transportado_a_un_libro,_adopté_al_villano",
imagen: "Después_de_ser_transportado_a_un_libro,_adopté_al_villano.jpg",
tags: "danmei pendiente moderno discapacidad slice-of-life transmigracion yandere",
autor: "tian-ni-xiaomi-zhou",
link: "https://www.novelupdates.com/series/after-being-transported-into-a-book-i-adopted-the-villain/"
},

{
titulo: 'Después de que regresó la luz de la luna blanca, el sustituto cayó en una crisis de desempleo',
slug: "Después_de_que_regresó_la_luz_de_la_luna_blanca,_el_sustituto_cayó_en_una_crisis_de_desempleo",
imagen: "Después_de_que_regresó_la_luz_de_la_luna_blanca,_el_sustituto_cayó_en_una_crisis_de_desempleo.jpg",
tags: "danmei pendiente moderno comedia malentendidos",
autor: "xiang-lu-gua",
link: "https://www.novelupdates.com/series/after-the-white-moonlight-came-back-the-stand-in-fell-into-unemployment-crisis/"
},

{
titulo: 'Después de poseer al pequeño genio del césped de la escuela',
slug: "Después_de_poseer_al_pequeño_genio_del_césped_de_la_escuela",
imagen: "Después_de_poseer_al_pequeño_genio_del_césped_de_la_escuela.jpg",
tags: "danmei pendiente moderno comedia school-life sobrenatural",
autor: "lin-ang-si",
link: "https://www.novelupdates.com/series/after-i-possessed-the-tmall-genie-of-the-school-adonis/"
},

{
titulo: 'Después de convertirme en llanta de repuesto, el villano y el protagonista masculino me atacaron al mismo tiempo',
slug: "Después_de_convertirme_en_llanta_de_repuesto,_el_villano_y_el_protagonista_masculino_me_atacaron_al_mismo_tiempo",
imagen: "Después_de_convertirme_en_llanta_de_repuesto,_el_villano_y_el_protagonista_masculino_me_atacaron_al_mismo_tiempo.jpg",
tags: "danmei pendiente moderno comedia compromiso-roto enemigos-a-amantes sistema slice-of-life transmigracion yandere",
autor: "yi-yezi",
link: "https://www.novelupdates.com/series/after-becoming-a-spare-tire-i-was-targeted-by-the-villain-and-the-male-lead-at-the-same-time/"
},

{
titulo: 'Cada día después del matrimonio es realmente fragante',
slug: "Cada_día_después_del_matrimonio_es_realmente_fragante",
imagen: "Cada_día_después_del_matrimonio_es_realmente_fragante.jpg",
tags: "danmei pendiente moderno comedia matrimonio-arreglado mpreg transmigracion",
autor: "dongfeng-jixu",
link: "https://www.novelupdates.com/series/every-day-after-marriage-is-really-fragrant/"
},

{
titulo: 'Barra de progreso de la muerte',
slug: "Barra_de_progreso_de_la_muerte",
imagen: "Barra_de_progreso_de_la_muerte.jpg",
tags: "danmei pendiente moderno comedia discapacidad malentendidos sistema sobrenatural transmigracion",
autor: "bu-hui-xia-qi",
link: "https://www.novelupdates.com/series/death-progress-bar/"
},

{
titulo: 'Aspiraciones de superestrella',
slug: "Aspiraciones_de_superestrella",
imagen: "Aspiraciones_de_superestrella.jpg",
tags: "danmei pendiente moderno espectaculo slice-of-life transmigracion",
autor: "mo-chen-huan",
link: "https://www.novelupdates.com/series/superstar-aspirations/"
},

{
titulo: 'Transmigrado a una tribu de bestias',
slug: "Transmigrado_a_una_tribu_de_bestias",
imagen: "Transmigrado_a_una_tribu_de_bestias.jpg",
tags: "danmei pendiente tribal hombres-bestia mpreg ninos slice-of-life transportado-a-otro-mundo",
autor: "zise-jingji",
link: "https://www.novelupdates.com/series/transmigrated-into-a-beast-tribe/"
},

{
titulo: 'Renacimiento con la bestia',
slug: "Renacimiento_con_la_bestia",
imagen: "Renacimiento_con_la_bestia.jpg",
tags: "danmei pendiente tribal hombres-bestia mpreg ninos transmigracion",
autor: "ye-bu-siyu",
link: "https://www.novelupdates.com/series/rebirth-with-the-beast/"
},

{
titulo: 'La primavera del tonto Gong',
slug: "La_primavera_del_tonto_Gong",
imagen: "La_primavera_del_tonto_Gong.jpg",
tags: "danmei pendiente tribal hombres-bestia mpreg ninos protagonista-gong slice-of-life transportado-a-otro-mundo",
autor: "yi-luocheng-huo",
link: "https://www.novelupdates.com/series/silly-spring-attack/"
},

{
titulo: 'Hombre bestia criando a una esposa a la fuerza',
slug: "Hombre_bestia_criando_a_una_esposa_a_la_fuerza",
imagen: "Hombre_bestia_criando_a_una_esposa_a_la_fuerza.jpg",
tags: "danmei pendiente tribal agricultura hombres-bestia no-humano smut transmigracion",
autor: "tu-douya-er",
link: "https://www.novelupdates.com/series/beastman-forcefully-raising-a-wife/"
},

{
titulo: 'Cruzando a lo Primitivo',
slug: "Cruzando_a_lo_Primitivo",
imagen: "Cruzando_a_lo_Primitivo.jpg",
tags: "danmei pendiente tribal comedia hombres-bestia sistema transportado-a-otro-mundo",
autor: "ye-shen",
link: "https://www.novelupdates.com/series/crossing-to-the-primitive/"
},

{
titulo: 'Tienda Bestia Linda No. 138',
slug: "Tienda_Bestia_Linda_No._138",
imagen: "Tienda_Bestia_Linda_No._138.jpg",
tags: "danmei pendiente futurista bestias comedia no-humano transmigracion",
autor: "da-jiangshi",
link: "https://www.novelupdates.com/series/cute-beast-store-no-138/"
},

{
titulo: 'Superestrella favorita interestelar',
slug: "Superestrella_favorita_interestelar",
imagen: "Superestrella_favorita_interestelar.jpg",
tags: "danmei pendiente futurista comedia realeza transmigracion",
autor: "shen-qing",
link: "https://www.novelupdates.com/series/interstellar-favorite-superstar/"
},

{
titulo: '¿Quieres tocar mi cola de pez?',
slug: "Quieres_tocar_mi_cola_de_pez",
imagen: "Quieres_tocar_mi_cola_de_pez.jpg",
tags: "danmei pendiente futurista malentendidos matrimonio-arreglado no-humano sirena",
autor: "xi-ci-shang",
link: "https://www.novelupdates.com/series/do-you-want-to-touch-my-fish-tail/"
},

{
titulo: 'Pareja de poder interestelar',
slug: "Pareja_de_poder_interestelar",
imagen: "Pareja_de_poder_interestelar.jpg",
tags: "danmei pendiente futurista comedia matrimonio-arreglado mpreg ninos transmigracion",
autor: "kun-cheng-xiong-mao",
link: "https://www.novelupdates.com/series/interstellar-power-couple/"
},

{
titulo: 'Ofrecido en matrimonio',
slug: "Ofrecido_en_matrimonio",
imagen: "Ofrecido_en_matrimonio.jpg",
tags: "danmei pendiente futurista comedia hombres-bestia inteligencia-artificial mpreg ninos transmigracion",
autor: "gui-ban-jing",
link: "https://www.novelupdates.com/series/offered-into-marriage/"
},

{
titulo: 'O pretende ser B para el almirante violento',
slug: "O_pretende_ser_B_para_el_almirante_violento",
imagen: "O_pretende_ser_B_para_el_almirante_violento.jpg",
tags: "danmei pendiente futurista comedia lucha-de-poder malentendidos mpreg omegaverse realeza",
autor: "gongzi-rou",
link: "https://www.novelupdates.com/series/o-pretends-to-be-b-for-the-violent-admiral/"
},

{
titulo: 'Mi compañero de cuarto probablemente no sea un omega',
slug: "Mi_compañero_de_cuarto_probablemente_no_sea_un_omega",
imagen: "Mi_compañero_de_cuarto_probablemente_no_sea_un_omega.jpg",
tags: "danmei pendiente futurista comedia malentendidos omegaverse smut",
autor: "ablfish",
link: "https://www.novelupdates.com/series/my-roommate-probably-is-not-an-omega/"
},

{
titulo: 'Me criaron después de ser una sirena',
slug: "Me_criaron_después_de_ser_una_sirena",
imagen: "Me_criaron_después_de_ser_una_sirena.jpg",
tags: "danmei pendiente futurista malentendidos mpreg no-humano realeza sirena transmigracion",
autor: "hanmen-yatou",
link: "https://www.novelupdates.com/series/i-was-raised-after-being-a-mermaid/"
},

{
titulo: 'Levantar un bollo con un sistema de vida diaria',
slug: "Levantar_un_bollo_con_un_sistema_de_vida_diaria",
imagen: "Levantar_un_bollo_con_un_sistema_de_vida_diaria.jpg",
tags: "danmei pendiente futurista comedia malentendidos mpreg ninos r18 sistema slice-of-life transmigracion",
autor: "long-qi",
link: "https://www.novelupdates.com/series/raising-a-bun-with-a-daily-life-system/"
},

{
titulo: 'Lecciones sobre cómo criar una pareja',
slug: "Lecciones_sobre_cómo_criar_una_pareja",
imagen: "Lecciones_sobre_cómo_criar_una_pareja.jpg",
tags: "danmei pendiente futurista comedia no-humano r18 transmigracion",
autor: "aci-guniang",
link: "https://www.novelupdates.com/series/lessons-on-raising-a-partner/"
},

{
titulo: 'Heredé el imperio con un embarazo falso',
slug: "Heredé_el_imperio_con_un_embarazo_falso",
imagen: "Heredé_el_imperio_con_un_embarazo_falso.jpg",
tags: "danmei pendiente futurista bestias cultivo malentendidos mpreg transportado-a-otro-mundo",
autor: "lian-yi",
link: "https://www.novelupdates.com/series/i-inherited-empire-with-fake-pregnancy/"
},

{
titulo: 'Guía de matrimonio imperial',
slug: "Guía_de_matrimonio_imperial",
imagen: "Guía_de_matrimonio_imperial.jpg",
tags: "danmei pendiente futurista mpreg omegaverse smut",
autor: "ban-renjian",
link: "https://www.novelupdates.com/series/imperial-marriage-guide/"
},

{
titulo: 'Transmigrado a la sirenita del jefe violento',
slug: "Transmigrado_a_la_sirenita_del_jefe_violento",
imagen: "Transmigrado_a_la_sirenita_del_jefe_violento.jpg",
tags: "danmei pendiente futurista lucha-de-poder matrimonio no-humano sirena sistema slice-of-life transmigracion",
autor: "xian-sanqian",
link: "https://drive.google.com/drive/u/4/folders/1QQANOW_YNXuM1rcKdQe10CJwSc8czXSX"
},

{
titulo: 'Este insecto macho se vio obligado a mantener a su familia',
slug: "Este_insecto_macho_se_vio_obligado_a_mantener_a_su_familia",
imagen: "Este_insecto_macho_se_vio_obligado_a_mantener_a_su_familia.jpg",
tags: "danmei pendiente futurista discapacidad drama matrimonio no-humano protagonista-gong zerg",
autor: "wo-huai",
link: "https://www.novelupdates.com/series/this-male-was-forced-to-support-his-family/"
},

{
titulo: 'El último creador',
slug: "El_último_creador",
imagen: "El_último_creador.jpg",
tags: "danmei pendiente futurista inteligencia-artificial no-humano slice-of-life",
autor: "biandan-yi-hao",
link: "https://www.novelupdates.com/series/the-last-creator/"
},

{
titulo: 'El trabajo del héroe Zerg',
slug: "El_trabajo_del_héroe_Zerg",
imagen: "El_trabajo_del_héroe_Zerg.jpg",
tags: "danmei pendiente futurista comedia no-humano transmigracion zerg",
autor: "youcai-de-yaoshi",
link: "https://www.novelupdates.com/series/insectoids-the-job-of-the-males/"
},

{
titulo: 'El general ama coleccionar pequeñas flores rojas',
slug: "El_general_ama_coleccionar_pequeñas_flores_rojas",
imagen: "El_general_ama_coleccionar_pequeñas_flores_rojas.jpg",
tags: "danmei pendiente futurista comedia matrimonio-arreglado mpreg omegaverse slice-of-life transmigracion",
autor: "kun-cheng-xiong-mao",
link: "https://www.novelupdates.com/series/the-general-loves-to-collect-little-red-flowers/"
},

{
titulo: 'Después de transmigrar en un Omega, fui marcado por el enemigo',
slug: "Después_de_transmigrar_en_un_Omega,_fui_marcado_por_el_enemigo",
imagen: "Después_de_transmigrar_en_un_Omega,_fui_marcado_por_el_enemigo.jpg",
tags: "danmei pendiente futurista comedia enemigos-a-amantes matrimonio-arreglado mpreg omegaverse transmigracion yandere",
autor: "shi-quan",
link: "https://www.novelupdates.com/series/after-transmigrating-into-an-omega-i-was-marked-by-the-enemy/"
},

{
titulo: 'Después de transmigrar a un villano carne de cañon Zerg masculino',
slug: "Después_de_transmigrar_a_un_villano_carne_de_cañon_Zerg_masculino",
imagen: "Después_de_transmigrar_a_un_villano_carne_de_cañon_Zerg_masculino.jpg",
tags: "danmei pendiente futurista comedia malentendidos matrimonio mpreg no-humano protagonista-gong sistema transmigracion yandere zerg",
autor: "mu-liang-ren",
link: "https://www.novelupdates.com/series/after-transmigrating-into-a-villain-cannon-fodder-male-zerg/"
},

{
titulo: 'Después de convertirme en el protagonista alfa, arrebaté el Omega carne de cañón',
slug: "Después_de_convertirme_en_el_protagonista_alfa,_arrebaté_el_Omega_carne_de_cañón",
imagen: "Después_de_convertirme_en_el_protagonista_alfa,_arrebaté_el_Omega_carne_de_cañón.jpg",
tags: "danmei pendiente futurista matrimonio-arreglado omegaverse protagonista-gong transmigracion",
autor: "caomei-tuotuo",
link: "https://www.novelupdates.com/series/after-becoming-the-alpha-protagonist-i-snatched-the-cannon-fodder-omega/"
},

{
titulo: 'Después de casarme, renacieron los que me traicionaron',
slug: "Después_de_casarme,_renacieron_los_que_me_traicionaron",
imagen: "Después_de_casarme,_renacieron_los_que_me_traicionaron.jpg",
tags: "danmei pendiente futurista aristocracia discapacidad lucha-de-poder malentendidos matrimonio-arreglado omegaverse realeza renacimiento",
autor: "yu-luo-qing-chen",
link: "https://www.novelupdates.com/series/after-i-got-married-those-who-betrayed-me-were-reborn/"
},

{
titulo: 'De vuelta a la cima',
slug: "De_vuelta_a_la_cima",
imagen: "De_vuelta_a_la_cima.jpg",
tags: "danmei pendiente futurista bestias cultivo protagonista-gong slice-of-life",
autor: "jue-jue",
link: "https://www.novelupdates.com/series/back-to-the-peak/"
},

{
titulo: 'Contrato de matrimonio de GunGun ojos Yin Yang',
slug: "Contrato_de_matrimonio_de_GunGun_ojos_Yin_Yang",
imagen: "Contrato_de_matrimonio_de_GunGun_ojos_Yin_Yang.jpg",
tags: "danmei pendiente futurista comedia cultivo no-humano slice-of-life terror transformacion-animal transmigracion",
autor: "shui-sensen",
link: "https://www.novelupdates.com/series/yin-yang-eye-gunguns-marriage-contract/"
},

{
titulo: 'Soy un limo',
slug: "Soy_un_limo",
imagen: "Soy_un_limo.jpg",
tags: "danmei pendiente fantasia no-humano oneshot smut",
autor: "momose-wasabi",
link: "https://www.novelupdates.com/series/i-am-a-slime/"
},

{
titulo: 'Renacer en un juego de Slash',
slug: "Renacer_en_un_juego_de_Slash",
imagen: "Renacer_en_un_juego_de_Slash.jpg",
tags: "danmei pendiente fantasia bestias comedia no-humano smut transmigracion",
autor: "long-qi",
link: "https://www.novelupdates.com/series/reborn-into-a-slash-game/"
},

{
titulo: 'Período de cortejo',
slug: "Período_de_cortejo",
imagen: "Período_de_cortejo.jpg",
tags: "danmei pendiente fantasia agricultura bestias malentendidos matrimonio mpreg no-humano protagonista-gong",
autor: "qi-guo-cha",
link: "https://www.novelupdates.com/series/courtship-period/"
},

{
titulo: 'Nutrir al héroe para evitar la muerte',
slug: "Nutrir_al_héroe_para_evitar_la_muerte",
imagen: "Nutrir_al_héroe_para_evitar_la_muerte.jpg",
tags: "danmei pendiente europa-antigua aristocracia comedia punto-de-vista-multiple slice-of-life smut transportado-a-otro-mundo",
autor: "yomogino",
link: "https://www.novelupdates.com/series/nurturing-the-hero-to-avoid-death/"
},

{
titulo: '¡Nunca pensé que serías este tipo de héroe!',
slug: "Nunca_pensé_que_serías_este_tipo_de_héroe",
imagen: "Nunca_pensé_que_serías_este_tipo_de_héroe.jpg",
tags: "danmei pendiente fantasia comedia transportado-a-otro-mundo",
autor: "ji-er-ji-jia",
link: "https://www.novelupdates.com/series/never-thought-youd-be-this-kind-of-hero/"
},

{
titulo: 'Me reencarné como el villano de un eroge, pero antes de darme cuenta, me convertí en un objetivo de captura',
slug: "Me_reencarné_como_el_villano_de_un_eroge,_pero_antes_de_darme_cuenta,_me_convertí_en_un_objetivo_de_captura",
imagen: "Me_reencarné_como_el_villano_de_un_eroge,_pero_antes_de_darme_cuenta,_me_convertí_en_un_objetivo_de_captura.jpg",
tags: "danmei pendiente fantasia comedia reencarnacion smut yandere",
autor: "yuzuki-haruka",
link: "https://www.novelupdates.com/series/i-reincarnated-as-the-villain-in-an-eroge-but-before-i-realized-i-became-a-capture-target/"
},

{
titulo: 'Hacerlo con el creador en un juego de supervivencia',
slug: "Hacerlo_con_el_creador_en_un_juego_de_supervivencia",
imagen: "Hacerlo_con_el_creador_en_un_juego_de_supervivencia.jpg",
tags: "danmei pendiente fantasia no-humano reencarnacion smut sobrenatural terror yandere",
autor: "xie-renxuan",
link: "https://www.novelupdates.com/series/doing-it-with-the-creator-in-a-survival-game/"
},

{
titulo: 'Esta maldita sed de supervivencia',
slug: "Esta_maldita_sed_de_supervivencia",
imagen: "Esta_maldita_sed_de_supervivencia.jpg",
tags: "danmei pendiente fantasia enemigos-a-amantes no-humano sobrenatural terror transmigracion yandere",
autor: "wang-sanshan",
link: "https://www.novelupdates.com/series/this-damned-thirst-for-survival/"
},

{
titulo: '¡Esta forma de transmigración es definitivamente incorrecta!',
slug: "Esta_forma_de_transmigración_es_definitivamente_incorrecta",
imagen: "Esta_forma_de_transmigración_es_definitivamente_incorrecta.jpg",
tags: "danmei pendiente fantasia comedia transmigracion yandere",
autor: "shui-bingleng",
link: "https://www.novelupdates.com/series/this-way-of-transmigration-is-definitely-wrong/"
},

{
titulo: 'El príncipe desvergonzado',
slug: "El_príncipe_desvergonzado",
imagen: "El_príncipe_desvergonzado.jpg",
tags: "danmei pendiente fantasia comedia oneshot protagonista-gong",
autor: "meng-bulang",
link: "https://www.novelupdates.com/series/the-shameless-prince/"
},

{
titulo: 'El personaje virtual que crié personalmente quiere casarse conmigo',
slug: "El_personaje_virtual_que_crié_personalmente_quiere_casarse_conmigo",
imagen: "El_personaje_virtual_que_crié_personalmente_quiere_casarse_conmigo.jpg",
tags: "danmei pendiente fantasia inteligencia-artificial malentendidos realeza sistema transmigracion yandere",
autor: "zui-ai-meizi-jiu",
link: "https://www.novelupdates.com/series/the-virtual-character-i-personally-raised-wants-to-marry-me/"
},

{
titulo: 'El origen del diablo',
slug: "El_origen_del_diablo",
imagen: "El_origen_del_diablo.jpg",
tags: "danmei pendiente fantasia bestias harem ninos no-humano shota sistema smut transmigracion",
autor: "misheng",
link: "https://www.novelupdates.com/series/the-devils-origin/"
},

{
titulo: 'Diario de criar una sirena',
slug: "Diario_de_criar_una_sirena",
imagen: "Diario_de_criar_una_sirena.jpg",
tags: "danmei pendiente fantasia no-humano sirena transmigracion",
autor: "you-yu-jiang",
link: "https://www.novelupdates.com/series/diary-of-raising-a-mermaid/"
},

{
titulo: 'Saber en la tercera mañana',
slug: "Saber_en_la_tercera_mañana",
imagen: "Saber_en_la_tercera_mañana.jpg",
tags: "danmei pendiente europa-antigua smut",
autor: "shiina",
link: "https://www.novelupdates.com/series/know-on-the-third-morning/"
},

{
titulo: '¡Quiero disfrutar de la vida en el campo!',
slug: "Quiero_disfrutar_de_la_vida_en_el_campo",
imagen: "Quiero_disfrutar_de_la_vida_en_el_campo.jpg",
tags: "danmei pendiente europa-antigua agricultura harem incesto realeza reencarnacion smut yandere",
autor: "botamochi",
link: "https://www.novelupdates.com/series/i-want-to-enjoy-a-country-life/"
},

{
titulo: 'Transmigrar en un personaje de carne de cañón para rehabilitar el plan de villano',
slug: "Transmigrar_en_un_personaje_de_carne_de_cañón_para_rehabilitar_el_plan_de_villano",
imagen: "Transmigrar_en_un_personaje_de_carne_de_cañón_para_rehabilitar_el_plan_de_villano.jpg",
tags: "danmei pendiente cultivacion amnesia cultivo drama transmigracion xianxia yandere",
autor: "sha-xiao-wan",
link: "https://www.novelupdates.com/series/transmigrating-into-a-mob-character-to-rehabilitate-the-villain-plan/"
},

{
titulo: 'Transmigrado al mundo del "Señor Demonio Wu Zun"',
slug: "Transmigrado_al_mundo_del_Señor_Demonio_Wu_Zun",
imagen: "Transmigrado_al_mundo_del_Señor_Demonio_Wu_Zun.jpg",
tags: "danmei pendiente cultivacion bestias cultivo r18 transmigracion yandere",
autor: "yi-luocheng-huo",
link: "https://www.novelupdates.com/series/transmigrated-into-the-world-of-demon-lord-wu-zun/"
},

{
titulo: 'Todos los días el protagonista quiere capturarme',
slug: "Todos_los_días_el_protagonista_quiere_capturarme",
imagen: "Todos_los_días_el_protagonista_quiere_capturarme.jpg",
tags: "danmei pendiente cultivacion comedia cultivo sistema transmigracion xianxia yandere",
autor: "qing-duan",
link: "https://www.novelupdates.com/series/every-day-the-protagonist-wants-to-capture-me/"
},

{
titulo: 'Salvar al villano por error',
slug: "Salvar_al_villano_por_error",
imagen: "Salvar_al_villano_por_error.jpg",
tags: "danmei pendiente cultivacion amnesia cultivo maestro-discipulo malentendidos sistema tragedia transmigracion xianxia yandere",
autor: "feng-yu-nie",
link: "https://www.novelupdates.com/series/mistakenly-saving-the-villain/"
},

{
titulo: 'Renacimiento del Ser Celestial Supremo',
slug: "Renacimiento_del_Ser_Celestial_Supremo",
imagen: "Renacimiento_del_Ser_Celestial_Supremo.jpg",
tags: "danmei pendiente cultivacion cultivo mpreg protagonista-gong renacimiento xianxia",
autor: "bing-tang-lian-zi-geng",
link: "https://www.novelupdates.com/series/rebirth-of-the-supreme-celestial-being/"
},

{
titulo: 'No es fácil ser un maestro',
slug: "No_es_fácil_ser_un_maestro",
imagen: "No_es_fácil_ser_un_maestro.jpg",
tags: "danmei pendiente cultivacion cultivo maestro-discipulo renacimiento transmigracion xianxia yandere",
autor: "jin-xi-gu-nian",
link: "https://www.novelupdates.com/series/its-not-easy-being-a-master/comment-page-8/"
},

{
titulo: 'Mi shidi todavía no me ha matado',
slug: "Mi_shidi_todavía_no_me_ha_matado",
imagen: "Mi_shidi_todavía_no_me_ha_matado.jpg",
tags: "danmei pendiente cultivacion comedia cultivo transmigracion xianxia yandere",
autor: "zi-lu",
link: "https://www.novelupdates.com/series/my-junior-still-hasnt-killed-me/"
},

{
titulo: 'Me convertí en una esposa virtuosa y una madre amorosa en otro mundo de cultivación',
slug: "Me_convertí_en_una_esposa_virtuosa_y_una_madre_amorosa_en_otro_mundo_de_cultivación",
imagen: "Me_convertí_en_una_esposa_virtuosa_y_una_madre_amorosa_en_otro_mundo_de_cultivación.jpg",
tags: "danmei pendiente cultivacion cultivo matrimonio-arreglado mpreg ninos transmigracion xuanhuan",
autor: "jin-yuanbao",
link: "https://www.novelupdates.com/series/i-became-a-virtuous-wife-and-loving-mother-in-another-cultivation-world/"
},

{
titulo: 'La tarea diaria de evitar que mi discípulo se pase al lado oscuro',
slug: "La_tarea_diaria_de_evitar_que_mi_discípulo_se_pase_al_lado_oscuro",
imagen: "La_tarea_diaria_de_evitar_que_mi_discípulo_se_pase_al_lado_oscuro.jpg",
tags: "danmei pendiente cultivacion comedia cultivo maestro-discipulo renacimiento xianxia yandere",
autor: "hei-mao-ni-ni",
link: "https://www.novelupdates.com/series/the-daily-task-of-preventing-my-disciple-from-turning-to-the-dark-side/"
},

{
titulo: 'He llevado al villano por mal camino, ¿cómo lo soluciono?',
slug: "He_llevado_al_villano_por_mal_camino,_cómo_lo_soluciono",
imagen: "He_llevado_al_villano_por_mal_camino,_cómo_lo_soluciono.jpg",
tags: "danmei pendiente cultivacion comedia cultivo xianxia yandere",
autor: "yan-ye",
link: "https://www.novelupdates.com/series/ive-led-the-villain-astray-how-do-i-fix-it/"
},

{
titulo: 'Encubierto del culto del mal sale a la luz todos los días',
slug: "Encubierto_del_culto_del_mal_sale_a_la_luz_todos_los_días",
imagen: "Encubierto_del_culto_del_mal_sale_a_la_luz_todos_los_días.jpg",
tags: "danmei pendiente cultivacion comedia cultivo enemigos-a-amantes malentendidos transmigracion",
autor: "lu-tianyi",
link: "https://www.novelupdates.com/series/evil-cult-undercover-gets-exposed-everyday/"
},

{
titulo: 'El sistema de autosalvación del villano escoria',
slug: "El_sistema_de_autosalvación_del_villano_escoria",
imagen: "El_sistema_de_autosalvación_del_villano_escoria.jpg",
tags: "danmei pendiente cultivacion comedia cultivo maestro-discipulo r18 sistema transmigracion xianxia yandere",
autor: "mo-xiang-tongxiu",
link: "https://www.novelupdates.com/series/the-scum-villains-self-saving-system/"
},

{
titulo: 'El Rey Demonio siempre piensa que estoy secretamente enamorado de él',
slug: "El_Rey_Demonio_siempre_piensa_que_estoy_secretamente_enamorado_de_él",
imagen: "El_Rey_Demonio_siempre_piensa_que_estoy_secretamente_enamorado_de_él.jpg",
tags: "danmei pendiente cultivacion comedia cultivo malentendidos sistema transmigracion xianxia",
autor: "dong-fang-huang-gua",
link: "https://www.novelupdates.com/series/the-demon-king-always-thinks-im-secretly-in-love-with-him/"
},

{
titulo: 'El regreso de la esposa abandonada',
slug: "El_regreso_de_la_esposa_abandonada",
imagen: "El_regreso_de_la_esposa_abandonada.jpg",
tags: "danmei pendiente cultivacion cultivo matrimonio-arreglado renacimiento venganza xianxia",
autor: "jin-yuanbao",
link: "https://www.novelupdates.com/series/comeback-of-the-abandoned-wife/"
},

{
titulo: 'El pequeño demonio zorro de dos colas y su sacerdote taoísta Gong',
slug: "El_pequeño_demonio_zorro_de_dos_colas_y_su_sacerdote_taoísta_Gong",
imagen: "El_pequeño_demonio_zorro_de_dos_colas_y_su_sacerdote_taoísta_Gong.jpg",
tags: "danmei pendiente cultivacion bestias cultivo no-humano smut xianxia",
autor: "liulian-qiaokeli",
link: "https://www.novelupdates.com/series/the-two-tailed-little-fox-demon-and-his-taoist-priest-gong/"
},

{
titulo: 'El mundo entero es mi crematorio',
slug: "El_mundo_entero_es_mi_crematorio",
imagen: "El_mundo_entero_es_mi_crematorio.jpg",
tags: "danmei pendiente cultivacion amnesia cultivo malentendidos sistema tragedia transmigracion xianxia",
autor: "bikabi",
link: "https://www.novelupdates.com/series/the-whole-world-is-my-crematorium/"
},

{
titulo: 'El gran maestro de la cultivación demoníaca',
slug: "El_gran_maestro_de_la_cultivación_demoníaca",
imagen: "El_gran_maestro_de_la_cultivación_demoníaca.jpg",
tags: "danmei pendiente cultivacion cultivo drama r18 reencarnacion sobrenatural xianxia",
autor: "mo-xiang-tongxiu",
link: "https://www.novelupdates.com/series/the-founder-of-diabolism/"
},

{
titulo: 'El desperdicio del renacimiento contraataca',
slug: "El_desperdicio_del_renacimiento_contraataca",
imagen: "El_desperdicio_del_renacimiento_contraataca.jpg",
tags: "danmei pendiente cultivacion comedia compromiso-roto cultivo malentendidos reencarnacion xuanhuan",
autor: "ye-yiluo",
link: "https://www.novelupdates.com/series/the-rebirth-waste-strikes-back/"
},

{
titulo: 'Volver a cero',
slug: "Volver_a_cero",
imagen: "Volver_a_cero.jpg",
tags: "danmei pendiente china-antigua matrimonio-arreglado mpreg protagonista-gong realeza renacimiento",
autor: "yi-ting-mo-tong",
link: "https://www.novelupdates.com/series/back-to-zero/"
},

{
titulo: 'Viajar a través de la antigüedad para ser comerciante',
slug: "Viajar_a_través_de_la_antigüedad_para_ser_comerciante",
imagen: "Viajar_a_través_de_la_antigüedad_para_ser_comerciante.jpg",
tags: "danmei pendiente china-antigua ger matrimonio mpreg protagonista-gong slice-of-life transmigracion",
autor: "yishi-yu",
link: "https://www.novelupdates.com/series/traveling-through-ancient-times-to-be-a-shopkeeper/"
},

{
titulo: 'Transmigrar a la antigüedad con la conveniencia de Lu',
slug: "Transmigrar_a_la_antigüedad_con_la_conveniencia_de_Lu",
imagen: "Transmigrar_a_la_antigüedad_con_la_conveniencia_de_Lu.jpg",
tags: "danmei pendiente china-antigua agricultura ger matrimonio-arreglado mpreg protagonista-gong slice-of-life transmigracion",
autor: "ye-yiluo",
link: "https://www.novelupdates.com/series/transmigrating-to-the-ancient-times-with-lus-convenience/"
},

{
titulo: 'Transmigrar a la amada esposa fugitiva del Príncipe Regente',
slug: "Transmigrar_a_la_amada_esposa_fugitiva_del_Príncipe_Regente",
imagen: "Transmigrar_a_la_amada_esposa_fugitiva_del_Príncipe_Regente.jpg",
tags: "danmei pendiente china-antigua aristocracia malentendidos matrimonio-arreglado transmigracion",
autor: "ruo-xing-ruo-chen",
link: "https://www.novelupdates.com/series/transmigrating-into-the-prince-regents-beloved-runaway-wife/"
},

{
titulo: 'Transmigración: la vida agrícola de un "tonto"',
slug: "Transmigración_la_vida_agrícola_de_un_tonto",
imagen: "Transmigración_la_vida_agrícola_de_un_tonto.jpg",
tags: "danmei pendiente china-antigua agricultura ger mpreg ninos protagonista-gong slice-of-life transmigracion",
autor: "zixi",
link: "https://www.novelupdates.com/series/transmigration-the-farm-life-of-a-fool/"
},

{
titulo: 'Tienes un correo: un cuento con moraleja',
slug: "Tienes_un_correo_un_cuento_con_moraleja",
imagen: "Tienes_un_correo_un_cuento_con_moraleja.jpg",
tags: "danmei pendiente china-antigua comedia slice-of-life smut",
autor: "hei-dan-bai",
link: "https://www.novelupdates.com/series/youve-got-mail-a-cautionary-tale/"
},

{
titulo: 'Soy la cruel carne de cañón del libro',
slug: "Soy_la_cruel_carne_de_cañón_del_libro",
imagen: "Soy_la_cruel_carne_de_cañón_del_libro.jpg",
tags: "danmei pendiente china-antigua lucha-de-poder matrimonio-arreglado mpreg realeza transmigracion venganza",
autor: "nian-luan",
link: "https://www.novelupdates.com/series/im-the-vicious-cannon-fodder-in-the-book/"
},

{
titulo: '¡Te ruego que rompas este compromiso!',
slug: "Te_ruego_que_rompas_este_compromiso",
imagen: "Te_ruego_que_rompas_este_compromiso.jpg",
tags: "danmei pendiente china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion",
autor: "kun-cheng-xiong-mao",
link: "https://www.novelupdates.com/series/begging-you-to-break-off-this-engagement/"
},

{
titulo: 'Renacimiento como gobernante fatuo y autoindulgente',
slug: "Renacimiento_como_gobernante_fatuo_y_autoindulgente",
imagen: "Renacimiento_como_gobernante_fatuo_y_autoindulgente.jpg",
tags: "danmei pendiente china-antigua protagonista-gong realeza transmigracion yandere",
autor: "xie-er",
link: "https://www.novelupdates.com/series/rebirth-as-a-fatuous-and-self-indulgent-ruler/"
},

{
titulo: 'Primavera una vez más',
slug: "Primavera_una_vez_más",
imagen: "Primavera_una_vez_más.jpg",
tags: "danmei pendiente china-antigua comedia harem protagonista-gong realeza transmigracion",
autor: "da-feng-gua-guo",
link: "https://www.novelupdates.com/series/spring-once-more/"
},

{
titulo: 'Por los campos de cultivo llenos de primavera',
slug: "Por_los_campos_de_cultivo_llenos_de_primavera",
imagen: "Por_los_campos_de_cultivo_llenos_de_primavera.jpg",
tags: "danmei pendiente china-antigua agricultura ger mpreg ninos transmigracion",
autor: "wentun-de-nuren",
link: "https://www.novelupdates.com/series/through-the-farming-fields-full-of-spring/"
},

{
titulo: 'Pequeño Ger, vida lenta en otro mundo',
slug: "Pequeño_Ger,_vida_lenta_en_otro_mundo",
imagen: "Pequeño_Ger,_vida_lenta_en_otro_mundo.jpg",
tags: "danmei pendiente china-antigua agricultura ger mpreg slice-of-life transmigracion",
autor: "j112233",
link: "https://www.novelupdates.com/series/little-ger-slow-life-in-another-world/"
},

{
titulo: 'Novia falsa',
slug: "Novia_falsa",
imagen: "Novia_falsa.jpg",
tags: "danmei pendiente china-antigua gender-bender smut",
autor: "zi-yue",
link: "https://www.novelupdates.com/series/counterfeit-bride/"
},

{
titulo: 'No te amé lo suficiente',
slug: "No_te_amé_lo_suficiente",
imagen: "No_te_amé_lo_suficiente.jpg",
tags: "danmei en-proceso china-antigua drama ger matrimonio mpreg realeza renacimiento",
autor: "zuiaimiaomiao",
link: "https://drive.google.com/drive/u/4/folders/1YizuNmLo9RP-b_5aPCeIiVjfUOp6Wb9M"
},

{
titulo: '¡No puedes ser feroz conmigo!',
slug: "No_puedes_ser_feroz_conmigo",
imagen: "No_puedes_ser_feroz_conmigo.jpg",
tags: "danmei pendiente china-antigua comedia renacimiento slice-of-life venganza",
autor: "xiu-sheng",
link: "https://www.novelupdates.com/series/you-cant-be-fierce-towards-me/"
},

{
titulo: 'Mi marido duro',
slug: "Mi_marido_duro",
imagen: "Mi_marido_duro.jpg",
tags: "danmei pendiente china-antigua comedia cultivo ger mpreg protagonista-gong realeza transmigracion",
autor: "xie-er",
link: "https://www.novelupdates.com/series/my-tough-husband/"
},

{
titulo: 'Mi guardia de la sombra me marcó después de fingir ser un alfa',
slug: "Mi_guardia_de_la_sombra_me_marcó_después_de_fingir_ser_un_alfa",
imagen: "Mi_guardia_de_la_sombra_me_marcó_después_de_fingir_ser_un_alfa.jpg",
tags: "danmei pendiente china-antigua mpreg omegaverse realeza",
autor: "chi-ling",
link: "https://www.novelupdates.com/series/i-got-marked-by-my-shadow-guard-after-pretending-to-be-an-alpha/"
},

{
titulo: 'La vida agrícola diaria de Li Jin transmigrado',
slug: "La_vida_agrícola_diaria_de_Li_Jin_transmigrado",
imagen: "La_vida_agrícola_diaria_de_Li_Jin_transmigrado.jpg",
tags: "danmei pendiente china-antigua agricultura ger mpreg ninos protagonista-gong transmigracion",
autor: "hui-mou-yi-ban-xia",
link: "https://www.novelupdates.com/series/the-transmigrated-li-jins-daily-farming-life/"
},

{
titulo: 'La transmigración del maestro de la planta espiritual',
slug: "La_transmigración_del_maestro_de_la_planta_espiritual",
imagen: "La_transmigración_del_maestro_de_la_planta_espiritual.jpg",
tags: "danmei pendiente china-antigua agricultura cultivo mpreg ninos protagonista-gong slice-of-life transmigracion",
autor: "ye-yiluo",
link: "https://www.novelupdates.com/series/the-spiritual-plant-master-transmigration/"
},

{
titulo: 'La transmigración de Mian [a regañadientes] se convierte en su hombre [esposa]',
slug: "La_transmigración_de_Mian_[a_regañadientes]_se_convierte_en_su_hombre_[esposa]",
imagen: "La_transmigración_de_Mian_[a_regañadientes]_se_convierte_en_su_hombre_[esposa].jpg",
tags: "danmei pendiente china-antigua agricultura cultivo mpreg ninos slice-of-life transmigracion",
autor: "lianxi-ningmou",
link: "https://www.novelupdates.com/series/transmigration-of-mian-reluctantly-becomes-his-man-wife/"
},

{
titulo: 'Hoy el Primer Ministro también quiere golpearse la cabeza contra el pilar',
slug: "Hoy_el_Primer_Ministro_también_quiere_golpearse_la_cabeza_contra_el_pilar",
imagen: "Hoy_el_Primer_Ministro_también_quiere_golpearse_la_cabeza_contra_el_pilar.jpg",
tags: "danmei pendiente china-antigua comedia matrimonio punto-de-vista-multiple realeza smut",
autor: "bazaodashe",
link: "https://www.novelupdates.com/series/today-prime-minister-also-wants-to-bang-his-head-on-the-pillar/"
},

{
titulo: 'Ganarse la vida, realizar exámenes y apoyar a la familia a través del sistema de exámenes imperial rural',
slug: "Ganarse_la_vida,_realizar_exámenes_y_apoyar_a_la_familia_a_través_del_sistema_de_exámenes_imperial_rural",
imagen: "Ganarse_la_vida,_realizar_exámenes_y_apoyar_a_la_familia_a_través_del_sistema_de_exámenes_imperial_rural.jpg",
tags: "danmei pendiente china-antigua agricultura comedia ger mpreg slice-of-life transmigracion",
autor: "tu-yue-guan",
link: "https://www.novelupdates.com/series/earning-a-living-taking-examinations-and-supporting-the-family-through-the-rural-imperial-examinations-system/"
},

{
titulo: 'El tirano cruel',
slug: "El_tirano_cruel",
imagen: "El_tirano_cruel.jpg",
tags: "danmei pendiente china-antigua enemigos-a-amantes harem realeza smut transmigracion",
autor: "rong-heng",
link: "https://www.novelupdates.com/series/the-cruel-tyrant/comment-page-2/?pg=1"
},

{
titulo: 'El sustituto de la belleza enfermiza abandono el trabajo',
slug: "El_sustituto_de_la_belleza_enfermiza_abandono_el_trabajo",
imagen: "El_sustituto_de_la_belleza_enfermiza_abandono_el_trabajo.jpg",
tags: "danmei pendiente china-antigua lucha-de-poder matrimonio-arreglado renacimiento",
autor: "yun-chutang",
link: "https://www.novelupdates.com/series/the-sickly-beauty-substitute-called-it-quits/"
},

{
titulo: 'El renacimiento del general que siempre se ve a sí mismo como un sustituto',
slug: "El_renacimiento_del_general_que_siempre_se_ve_a_sí_mismo_como_un_sustituto",
imagen: "El_renacimiento_del_general_que_siempre_se_ve_a_sí_mismo_como_un_sustituto.jpg",
tags: "danmei pendiente china-antigua comedia lucha-de-poder malentendidos matrimonio realeza renacimiento venganza",
autor: "yi-yi-yi-yi",
link: "https://www.novelupdates.com/series/the-rebirth-of-the-general-who-always-sees-himself-as-a-replacement/"
},

{
titulo: 'El pequeño y dulce Fulang',
slug: "El_pequeño_y_dulce_Fulang",
imagen: "El_pequeño_y_dulce_Fulang.jpg",
tags: "danmei pendiente china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life",
autor: "cha-chacha",
link: "https://www.novelupdates.com/series/the-sweet-little-fulang/"
},

{
titulo: 'El pájaro Nie Bufan',
slug: "El_pájaro_Nie_Bufan",
imagen: "El_pájaro_Nie_Bufan.jpg",
tags: "danmei pendiente china-antigua harem mpreg smut sobrenatural transmigracion",
autor: "xueyuan-youling",
link: "https://www.novelupdates.com/series/bird-dude-nie-bufan/"
},

{
titulo: 'El magnate culinario',
slug: "El_magnate_culinario",
imagen: "El_magnate_culinario.jpg",
tags: "danmei pendiente china-antigua agricultura mpreg protagonista-gong slice-of-life transmigracion",
autor: "fanchen-pian-ye",
link: "https://www.novelupdates.com/series/the-culinary-tycoon/"
},

{
titulo: 'El gran propietario',
slug: "El_gran_propietario",
imagen: "El_gran_propietario.jpg",
tags: "danmei pendiente china-antigua aristocracia matrimonio-arreglado r18 realeza transmigracion",
autor: "yin-ya",
link: "https://www.novelupdates.com/series/the-big-landlord/"
},

{
titulo: 'El emperador sumiso',
slug: "El_emperador_sumiso",
imagen: "El_emperador_sumiso.jpg",
tags: "danmei pendiente china-antigua comedia matrimonio-arreglado protagonista-gong realeza",
autor: "lu-ye-qian-he",
link: "https://www.novelupdates.com/series/the-submissive-emperor/comment-page-2/?pg=1&grr=1"
},

{
titulo: 'El camino del contraataque de carne de cañón',
slug: "El_camino_del_contraataque_de_carne_de_cañón",
imagen: "El_camino_del_contraataque_de_carne_de_cañón.jpg",
tags: "danmei pendiente china-antigua realeza renacimiento transportado-a-otro-mundo",
autor: "mao-niao",
link: "https://www.novelupdates.com/series/the-path-of-the-cannon-fodders-counterattack/"
},

{
titulo: 'Diario de la esposa mimada del tirano',
slug: "Diario_de_la_esposa_mimada_del_tirano",
imagen: "Diario_de_la_esposa_mimada_del_tirano.jpg",
tags: "danmei pendiente china-antigua comedia matrimonio mpreg realeza renacimiento venganza yandere",
autor: "yi-ri-zhi-qian",
link: "https://www.novelupdates.com/series/tyrant-pampering-wife-diary/"
},

{
titulo: 'Después de que el Gong carne de cañon comenzara a cultivar, tuvo HE con el protagonista masculino frío',
slug: "Después_de_que_el_Gong_carne_de_cañon_comenzara_a_cultivar,_tuvo_HE_con_el_protagonista_masculino_frío",
imagen: "Después_de_que_el_Gong_carne_de_cañon_comenzara_a_cultivar,_tuvo_HE_con_el_protagonista_masculino_frío.jpg",
tags: "danmei pendiente china-antigua discapacidad mpreg protagonista-gong slice-of-life transmigracion",
autor: "dan-xueqing",
link: "https://www.novelupdates.com/series/after-cannon-fodder-gong-started-farming-he-had-he-with-the-cold-male-protagonist/"
},

{
titulo: 'Cariño especial',
slug: "Cariño_especial",
imagen: "Cariño_especial.jpg",
tags: "danmei pendiente china-antigua matrimonio-arreglado smut",
autor: "du-mao-cai",
link: "https://www.novelupdates.com/series/special-fondness/"
},

{
titulo: 'Mi cereza explotará en el Apocalipsis',
slug: "Mi_cereza_explotará_en_el_Apocalipsis",
imagen: "Mi_cereza_explotará_en_el_Apocalipsis.jpg",
tags: "danmei pendiente apocalipsis renacimiento slice-of-life zombies",
autor: "yan-chu",
link: "https://www.novelupdates.com/series/my-cherry-will-explode-in-the-apocalypse/"
},

{
titulo: 'Esposa zombi número uno',
slug: "Esposa_zombi_número_uno",
imagen: "Esposa_zombi_número_uno.jpg",
tags: "danmei pendiente apocalipsis amnesia comedia enemigos-a-amantes mpreg no-humano renacimiento sobrenatural transmigracion zombies",
autor: "jin-yuanbao",
link: "https://www.novelupdates.com/series/number-one-zombie-wife/"
},

{
titulo: 'El renacimiento de los últimos días y el regreso de [Fang] Hao',
slug: "El_renacimiento_de_los_últimos_días_y_el_regreso_de_[Fang]_Hao",
imagen: "El_renacimiento_de_los_últimos_días_y_el_regreso_de_[Fang]_Hao.jpg",
tags: "danmei pendiente apocalipsis protagonista-gong renacimiento slice-of-life zombies",
autor: "nuan-he",
link: "https://www.novelupdates.com/series/the-rebirth-of-the-last-days-and-return-to-fang-hao/"
},

{
titulo: 'Después de cepillar la cara al jefe del Apocalipsis durante 363 días',
slug: "Después_de_cepillar_la_cara_al_jefe_del_Apocalipsis_durante_363_días",
imagen: "Después_de_cepillar_la_cara_al_jefe_del_Apocalipsis_durante_363_días.jpg",
tags: "danmei pendiente apocalipsis comedia inteligencia-artificial malentendidos no-humano transportado-a-otro-mundo zombies",
autor: "da-yuan-zi",
link: "https://www.novelupdates.com/series/after-brushing-face-at-the-apocalypses-boss-for-363-days/"
},

{
titulo: 'De vuelta al Apocalipsis: El renacimiento de Bai Jing',
slug: "De_vuelta_al_Apocalipsis_El_renacimiento_de_Bai_Jing",
imagen: "De_vuelta_al_Apocalipsis_El_renacimiento_de_Bai_Jing.jpg",
tags: "danmei pendiente apocalipsis protagonista-op r18 renacimiento slice-of-life yandere zombies",
autor: "ye-yo",
link: "https://www.novelupdates.com/series/back-to-the-apocalypse/"
},

{
titulo: 'Contraataque de un Loto Blanco que renació en un Apocalipsis',
slug: "Contraataque_de_un_Loto_Blanco_que_renació_en_un_Apocalipsis",
imagen: "Contraataque_de_un_Loto_Blanco_que_renació_en_un_Apocalipsis.jpg",
tags: "danmei pendiente apocalipsis comedia cultivo malentendidos protagonista-gong sobrenatural transmigracion zombies",
autor: "suiyue-dadao-liu",
link: "https://www.novelupdates.com/series/counterattack-of-a-white-lotus-that-was-reborn-into-an-apocalypse/"
},

{
titulo: 'De vuelta al campo',
slug: "De_vuelta_al_campo",
imagen: "De_vuelta_al_campo.jpg",
tags: "danmei finalizado china-antigua agricultura ger matrimonio mpreg protagonista-gong slice-of-life",
autor: "bei-ming-chi",
link: "https://drive.google.com/drive/u/4/folders/1eSU_oQRfmYBKDchkDlzfKZlAy24wmOyu"
},

{
titulo: 'El segundo protagonista masculino enamorado no existe [Transmigración al libro]',
slug: "El_segundo_protagonista_masculino_enamorado_no_existe_[Transmigración_al_libro]",
imagen: "El_segundo_protagonista_masculino_enamorado_no_existe_[Transmigración_al_libro].jpg",
tags: "danmei finalizado moderno discapacidad drama espectaculo protagonista-gong transmigracion",
autor: "bei-ming-chi",
link: "https://drive.google.com/drive/u/4/folders/1cvdSERxyc98zbEzwwtvUTXXyf_ssShyT"
},

{
titulo: 'Cómo decir "Te amo"',
slug: "Cómo_decir_Te_amo",
imagen: "Cómo_decir_Te_amo.jpg",
tags: "danmei finalizado moderno drama espectaculo r18",
autor: "feng-liu-shu-dai",
link: "https://drive.google.com/drive/u/4/folders/1Z_DrP3bBM74J2Jv54MdGwt0XWtN0SkA7"
},

{
titulo: 'El PNJ de la novela abusiva se está relajando [Transmigración rápida]',
slug: "El_PNJ_de_la_novela_abusiva_se_está_relajando_[Transmigración_rápida]",
imagen: "El_PNJ_de_la_novela_abusiva_se_está_relajando_[Transmigración_rápida].jpg",
tags: "danmei en-proceso multiples-mundos inteligencia-artificial matrimonio multiples-protagonistas no-humano omegaverse protagonista-gong realeza sistema transmigracion zerg",
autor: "Wo-suan-shenme-xiao-binggan",
link: "https://drive.google.com/drive/u/4/folders/1fgpUyq6OhXea3G40AJz0s9maYq6d4vmH"
},

{
titulo: 'Después de que los maridos gemelos intercambiaron sus vidas',
slug: "Después_de_que_los_maridos_gemelos_intercambiaron_sus_vidas",
imagen: "Después_de_que_los_maridos_gemelos_intercambiaron_sus_vidas.jpg",
tags: "danmei en-proceso china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life",
autor: "yu-chun",
link: "https://drive.google.com/drive/u/4/folders/1hV4WxOGqw-HxSgTX-WebDvIF6eKepRVi"
},

{
titulo: 'Sobre las mil posturas reconstruidas por los canallas',
slug: "Sobre_las_mil_posturas_reconstruidas_por_los_canallas",
imagen: "Sobre_las_mil_posturas_reconstruidas_por_los_canallas.jpg",
tags: "danmei mtl multiples-mundos comedia no-humano protagonista-gong sistema transmigracion",
autor: "bunker-fort",
link: "https://drive.google.com/drive/u/4/folders/19u33SrGF4YNumqoBM0DrHI3n3agbyr8f"
},

{
titulo: 'El rescate del trágico villano está en progreso',
slug: "El_rescate_del_trágico_villano_está_en_progreso",
imagen: "El_rescate_del_trágico_villano_está_en_progreso.jpg",
tags: "danmei en-proceso multiples-mundos comedia discapacidad ger inteligencia-artificial lucha-de-poder multiples-protagonistas no-humano sistema transmigracion zerg",
autor: "bunker-fort",
link: "https://drive.google.com/drive/u/4/folders/1cDMUww0vX0FpzdgiUdLFiHxpX2ipZZSH"
},

{
titulo: 'En el futuro, todo mi cuerpo es un tesoro',
slug: "En_el_futuro,_todo_mi_cuerpo_es_un_tesoro",
imagen: "En_el_futuro,_todo_mi_cuerpo_es_un_tesoro.jpg",
tags: "danmei finalizado futurista comedia cultivo matrimonio-arreglado mpreg ninos no-humano shota transportado-a-otro-mundo",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/19r49bH2_LKRPSR88XdyAPm5-YFFIsyHa"
},

{
titulo: 'Un nido de serpientes dentro de una tumba antigua',
slug: "Un_nido_de_serpientes_dentro_de_una_tumba_antigua",
imagen: "Un_nido_de_serpientes_dentro_de_una_tumba_antigua.jpg",
tags: "danmei finalizado fantasia animales comedia mpreg no-humano reencarnacion",
autor: "gu-zhong-ran",
link: "https://drive.google.com/drive/u/4/folders/1Zc03hDMnivNaPoL0ajZcvXWosQmJZdJl"
},

{
titulo: 'Xiao Jiu',
slug: "Xiao_Jiu",
imagen: "Xiao_Jiu.jpg",
tags: "danmei finalizado china-antigua malentendidos matrimonio realeza smut",
autor: "xu-banxian",
link: "https://drive.google.com/drive/u/4/folders/1qaVTt-B19U3Bp0zV9F_b7SUbJfVEgtPm"
},

{
titulo: 'Vengo de lejos entre los Zerg',
slug: "Vengo_de_lejos_entre_los_Zerg",
imagen: "Vengo_de_lejos_entre_los_Zerg.jpg",
tags: "danmei finalizado futurista aristocracia multiples-protagonistas protagonista-gong realeza transportado-a-otro-mundo zerg",
autor: "bunker-fort",
link: "https://drive.google.com/drive/u/4/folders/1S1lA-ryJqQ7cjxJF5N95OGn8jzl4nRvC"
},

{
titulo: 'Usa rápidamente la cara del diablo',
slug: "Usa_rápidamente_la_cara_del_diablo",
imagen: "Usa_rápidamente_la_cara_del_diablo.jpg",
tags: "danmei finalizado multiples-mundos drama protagonista-op smut transmigracion venganza yandere",
autor: "feng-liu-shu-dai",
link: "https://drive.google.com/drive/u/4/folders/19baWW1tZ1JMTG3Pe1o7b9bPl84qON2fr"
},

{
titulo: 'Una guía para criar a tu enemigo natural',
slug: "Una_guía_para_criar_a_tu_enemigo_natural",
imagen: "Una_guía_para_criar_a_tu_enemigo_natural.jpg",
tags: "danmei finalizado futurista comedia cultivo hombres-bestia maestro-discipulo matrimonio mpreg ninos transportado-a-otro-mundo",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/1U3EeONqRhclwzLUFmsB2v6gLpi98ijdx"
},

{
titulo: 'Transmigrado en el esposo de un herrero',
slug: "Transmigrado_en_el_esposo_de_un_herrero",
imagen: "Transmigrado_en_el_esposo_de_un_herrero.jpg",
tags: "danmei finalizado china-antigua agricultura ger matrimonio-arreglado mpreg slice-of-life transmigracion",
autor: "yao-zhi",
link: "https://drive.google.com/drive/u/4/folders/1qmHQP4TubAuT7yOpr-U3-OxwbyeDJoj6"
},

{
titulo: 'Todo el mundo sabe que soy una buena persona',
slug: "Todo_el_mundo_sabe_que_soy_una_buena_persona",
imagen: "Todo_el_mundo_sabe_que_soy_una_buena_persona.jpg",
tags: "danmei finalizado multiples-mundos amnesia comedia inteligencia-artificial no-humano protagonista-op sistema transmigracion",
autor: "tang-wei-shuai",
link: "https://drive.google.com/drive/u/4/folders/1_WUmbzz6b95PefD9DIjGeP2zPw9yN52v"
},

{
titulo: 'Te veo',
slug: "Te_veo",
imagen: "Te_veo.jpg",
tags: "danmei finalizado china-antigua discapacidad malentendidos matrimonio-arreglado",
autor: "gujin",
link: "https://drive.google.com/drive/u/4/folders/1HJxe1kjFjDotc0N5ExOpZaoYZr8ePczz"
},

{
titulo: 'Siete días como villano',
slug: "Siete_días_como_villano",
imagen: "Siete_días_como_villano.jpg",
tags: "danmei finalizado europa-antigua aristocracia r18 reencarnacion",
autor: "rirakkusu@piro",
link: "https://drive.google.com/drive/u/4/folders/1JiwsoPUOamXVMn7drL8T_ph-gfFIpM-1"
},

{
titulo: 'Renacimiento del pequeño lobo Shou de pantalones de seda',
slug: "Renacimiento_del_pequeño_lobo_Shou_de_pantalones_de_seda",
imagen: "Renacimiento_del_pequeño_lobo_Shou_de_pantalones_de_seda.jpg",
tags: "danmei finalizado moderno drama r18 renacimiento shota slice-of-life venganza",
autor: "xiangchang-jun",
link: "https://drive.google.com/drive/u/4/folders/12npI2_1TZZ54wWHKRtv_UOyss9R11i6L"
},

{
titulo: 'Renacimiento de una estrella de cine',
slug: "Renacimiento_de_una_estrella_de_cine",
imagen: "Renacimiento_de_una_estrella_de_cine.jpg",
tags: "danmei finalizado moderno drama espectaculo ninos renacimiento slice-of-life",
autor: "j112233",
link: "https://drive.google.com/drive/u/4/folders/1tHhEvjY1MzMTYrdlChtzYGNPZtQhj4DW"
},

{
titulo: 'Renacer como un sistema',
slug: "Renacer_como_un_sistema",
imagen: "Renacer_como_un_sistema.jpg",
tags: "danmei finalizado multiples-mundos no-humano renacimiento sistema smut transmigracion yandere",
autor: "your-glory",
link: "https://drive.google.com/drive/u/4/folders/1omYjIaudPKQucuihTgjFGvt9L96a_PZT"
},

{
titulo: '¡Realmente soy un Shou escoria!',
slug: "Realmente_soy_un_Shou_escoria",
imagen: "Realmente_soy_un_Shou_escoria.jpg",
tags: "danmei finalizado multiples-mundos comedia sistema transmigracion yandere",
autor: "your-glory",
link: "https://drive.google.com/drive/u/4/folders/1y5C5GUJj1bAwebaUyNaSmr09QdpWRNv3"
},

{
titulo: 'Querido esposo',
slug: "Querido_esposo",
imagen: "Querido_esposo.jpg",
tags: "danmei finalizado multiples-mundos amnesia comedia protagonista-gong protagonista-op slice-of-life",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/1N_FUeIf1eRokBG5uHJ2x6IOOdO2hFhbE"
},

{
titulo: '¿Por qué los protagonistas Gong y Shou pelean por mí?',
slug: "Por_qué_los_protagonistas_Gong_y_Shou_pelean_por_mí",
imagen: "Por_qué_los_protagonistas_Gong_y_Shou_pelean_por_mí.jpg",
tags: "danmei finalizado futurista comedia ger malentendidos omegaverse",
autor: "tian-huafang",
link: "https://drive.google.com/drive/u/4/folders/1hTuxgDRCCfw7a0wpuSD6MCBI3o7C36m0"
},

{
titulo: 'Por el bien de su pareja, incluso este villano puede cambiar de rol',
slug: "Por_el_bien_de_su_pareja,_incluso_este_villano_puede_cambiar_de_rol",
imagen: "Por_el_bien_de_su_pareja,_incluso_este_villano_puede_cambiar_de_rol.jpg",
tags: "danmei finalizado multiples-mundos multiples-protagonistas no-humano sobrenatural transmigracion",
autor: "zhao-yexi",
link: "https://drive.google.com/drive/u/4/folders/15lRDAruf9ESJjxZeDVemS-RkxO2RSMxL"
},

{
titulo: 'Pequeño tonto',
slug: "Pequeño_tonto",
imagen: "Pequeño_tonto.jpg",
tags: "danmei finalizado china-antigua discapacidad ger matrimonio smut",
autor: "xiaoshi-nan-ji",
link: "https://drive.google.com/drive/u/4/folders/1f1bTd0tsNmKdJ_M-KVqQ0PuxGfttIwNJ"
},

{
titulo: 'Omega tonto atado al sistema de rebobinado',
slug: "Omega_tonto_atado_al_sistema_de_rebobinado",
imagen: "Omega_tonto_atado_al_sistema_de_rebobinado.jpg",
tags: "danmei finalizado moderno comedia omegaverse sistema slice-of-life transmigracion",
autor: "mao-qiu-qiu",
link: "https://drive.google.com/drive/u/4/folders/1w5n48SLBsFRHAzIt_v_QYdi5iqT0U5Lr"
},

{
titulo: 'Obligado a casarse con una placa conmemorativa',
slug: "Obligado_a_casarse_con_una_placa_conmemorativa",
imagen: "Obligado_a_casarse_con_una_placa_conmemorativa.jpg",
tags: "danmei finalizado china-antigua agricultura malentendidos matrimonio-arreglado mpreg ninos sobrenatural wuxia",
autor: "lin-qin-ren",
link: "https://drive.google.com/drive/u/4/folders/1Q_h00CGFemYSok8L3OrXa2gUuHj1JkNU"
},

{
titulo: '¿No te gusto?',
slug: "No_te_gusto",
imagen: "No_te_gusto.jpg",
tags: "danmei finalizado moderno comedia malentendidos school-life sobrenatural",
autor: "lu-tianyi",
link: "https://drive.google.com/drive/u/4/folders/197sDfbOt_HRJ7jsnqwhRDh9XlTnxG7Uu"
},

{
titulo: 'No soy humano',
slug: "No_soy_humano",
imagen: "No_soy_humano.jpg",
tags: "danmei finalizado futurista comedia no-humano protagonista-op reencarnacion slice-of-life zerg",
autor: "jiuyi",
link: "https://drive.google.com/drive/u/4/folders/1PBu_SoysVWM0j_TdNQ4RbwUWugjuJKBJ"
},

{
titulo: 'No seas un hombre mantenido',
slug: "No_seas_un_hombre_mantenido",
imagen: "No_seas_un_hombre_mantenido.jpg",
tags: "danmei finalizado multiples-mundos multiples-protagonistas protagonista-gong renacimiento sistema transmigracion",
autor: "bunker-fort",
link: "https://drive.google.com/drive/u/4/folders/1C882M7jTKE5MdNPh6He1tNBkkDdST4fL"
},

{
titulo: 'Mi marido varonil favorito',
slug: "Mi_marido_varonil_favorito",
imagen: "Mi_marido_varonil_favorito.jpg",
tags: "danmei finalizado china-antigua agricultura amnesia aristocracia ger matrimonio mpreg transmigracion",
autor: "ri-li-feng-he",
link: "https://drive.google.com/drive/u/4/folders/1uOQM3ynCQeWyuPbjSJxk_KH2fYR_8XLN"
},

{
titulo: 'Mi marido lobo',
slug: "Mi_marido_lobo",
imagen: "Mi_marido_lobo.jpg",
tags: "danmei finalizado china-antigua bestias ger mpreg no-humano transmigracion",
autor: "wushan-you-duan-yun",
link: "https://drive.google.com/drive/u/4/folders/1g1yvmwd8aYF2Jbu9j2MHRwmn-Kel6iUQ"
},

{
titulo: 'Marido, déjame tocar tus abdominales',
slug: "Marido,_déjame_tocar_tus_abdominales",
imagen: "Marido,_déjame_tocar_tus_abdominales.jpg",
tags: "danmei finalizado china-antigua agricultura ger mpreg ninos r18 slice-of-life transmigracion",
autor: "998",
link: "https://drive.google.com/drive/u/4/folders/1N6RtIcB2OIfxnWFZiyPDu9736KQEtsKL"
},

{
titulo: 'Marca accidental',
slug: "Marca_accidental",
imagen: "Marca_accidental.jpg",
tags: "danmei finalizado moderno comedia espectaculo omegaverse protagonista-gong sistema slice-of-life transmigracion",
autor: "die-zhiling",
link: "https://drive.google.com/drive/u/4/folders/10rYXUKKiqRciwxnl7NFIGkE1ME9Fcd6Y"
},

{
titulo: 'La esposa es primero',
slug: "La_esposa_es_primero",
imagen: "La_esposa_es_primero.jpg",
tags: "danmei finalizado china-antigua matrimonio-arreglado protagonista-gong realeza renacimiento smut venganza",
autor: "lu-ye-qian-he",
link: "https://drive.google.com/drive/u/4/folders/1L7XbAHqtGv2cB9IoRcBtUIGZLzFCevxA"
},

{
titulo: 'La esposa del Legendario Maestro',
slug: "La_esposa_del_Legendario_Maestro",
imagen: "La_esposa_del_Legendario_Maestro.jpg",
tags: "danmei finalizado cultivacion bestias cultivo no-humano transmigracion xuanhuan",
autor: "yin-ya",
link: "https://drive.google.com/drive/u/4/folders/1BXkFDqJphEwoFNN0Ou5guBDeRxNF907q"
},

{
titulo: 'La breve historia de ShaoWang',
slug: "La_breve_historia_de_ShaoWang",
imagen: "La_breve_historia_de_ShaoWang.jpg",
tags: "danmei finalizado moderno comedia mpreg omegaverse smut",
autor: "bing-kuai-er",
link: "https://drive.google.com/drive/u/4/folders/1GBeSSCyUz9PNrvV4xOAE9LeVpJ-VwJni"
},

{
titulo: 'La belleza enferma se casa con un ciudadano que transmigró en un libro',
slug: "La_belleza_enferma_se_casa_con_un_ciudadano_que_transmigró_en_un_libro",
imagen: "La_belleza_enferma_se_casa_con_un_ciudadano_que_transmigró_en_un_libro.jpg",
tags: "danmei finalizado china-antigua comedia lucha-de-poder malentendidos matrimonio-arreglado punto-de-vista-multiple realeza slice-of-life transmigracion venganza",
autor: "zeda",
link: "https://drive.google.com/drive/u/4/folders/1Ddjo3SFV5cjp5LfKivaiMBMeDPblpvrR"
},

{
titulo: 'La amada emperatriz del tirano',
slug: "La_amada_emperatriz_del_tirano",
imagen: "La_amada_emperatriz_del_tirano.jpg",
tags: "danmei finalizado china-antigua lucha-de-poder matrimonio-arreglado mpreg renacimiento",
autor: "xiu-sheng",
link: "https://drive.google.com/drive/u/4/folders/10H0m0hO_22ah9NK-n26xUw0rjqBvP6Bm"
},

{
titulo: 'Juego Cargando',
slug: "Juego_Cargando",
imagen: "Juego_Cargando.jpg",
tags: "danmei finalizado multiples-mundos comedia transmigracion yandere",
autor: "long-qi",
link: "https://drive.google.com/drive/u/4/folders/13g6RDpxcL4R3hWTVZiqNgs8-RgImOhKh"
},

{
titulo: 'Hogar de los zerg',
slug: "Hogar_de_los_zerg",
imagen: "Hogar_de_los_zerg.jpg",
tags: "danmei finalizado futurista matrimonio mpreg ninos no-humano protagonista-gong slice-of-life transmigracion zerg",
autor: "heng-heng",
link: "https://drive.google.com/drive/u/4/folders/1Np_fp34kMWUeoIblm0rmvWmFV6GC6KcX"
},

{
titulo: 'Gallo x gallo',
slug: "Gallo_x_gallo",
imagen: "Gallo_x_gallo.jpg",
tags: "danmei finalizado china-antigua animales comedia mpreg no-humano omegaverse smut",
autor: "tian-mu-you",
link: "https://drive.google.com/drive/u/4/folders/1lRvvNW4mQjMtaiF3hkvkCsR5Hk1svF0I"
},

{
titulo: 'Especies raras interestelares',
slug: "Especies_raras_interestelares",
imagen: "Especies_raras_interestelares.jpg",
tags: "danmei finalizado futurista discapacidad hombres-bestia matrimonio mpreg transportado-a-otro-mundo",
autor: "hanmen-yatou",
link: "https://drive.google.com/drive/u/4/folders/13ku_FokV0XO575-XfopxFE7vDACoRSj5"
},

{
titulo: 'Enamorado',
slug: "Enamorado",
imagen: "Enamorado.jpg",
tags: "danmei finalizado multiples-mundos amnesia comedia espectaculo omegaverse protagonista-gong transformacion-animal",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/1Z29lrxIhS22-pY3kdKv2GrCsTvxH9F0S"
},

{
titulo: 'El único marido feo favorito',
slug: "El_único_marido_feo_favorito",
imagen: "El_único_marido_feo_favorito.jpg",
tags: "danmei finalizado china-antigua agricultura ger matrimonio ninos protagonista-gong slice-of-life",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/1OvnvHyK7yQpTu6_vDnC4i1IWkpNtlohl"
},

{
titulo: 'El tonto gong renació',
slug: "El_tonto_gong_renació",
imagen: "El_tonto_gong_renació.jpg",
tags: "danmei finalizado moderno comedia matrimonio protagonista-gong renacimiento school-life",
autor: "duo-jin-shaonu-mao",
link: "https://drive.google.com/drive/u/4/folders/1MkRt4bdx6oYvIjiiOKiUaPD-J8w7zrzM"
},

{
titulo: 'El rico y honorable ChangAn',
slug: "El_rico_y_honorable_ChangAn",
imagen: "El_rico_y_honorable_ChangAn.jpg",
tags: "danmei finalizado china-antigua drama lucha-de-poder matrimonio-arreglado mpreg realeza",
autor: "wu-duo-yun",
link: "https://drive.google.com/drive/u/4/folders/1nM3-hkKg3yw7yvjFQwf2ETxV7U9TFd4u"
},

{
titulo: 'El rascador divino del gato blanco',
slug: "El_rascador_divino_del_gato_blanco",
imagen: "El_rascador_divino_del_gato_blanco.jpg",
tags: "danmei finalizado cultivacion bestias comedia cultivo maestro-discipulo mascotas no-humano protagonista-gong smut xianxia yandere",
autor: "lu-ye-qian-he",
link: "https://drive.google.com/drive/u/4/folders/1VUM7dNvO5VeJn_Z824fTJxdVGbDOE6CR"
},

{
titulo: 'El pez palmera mascota del tirano discapacitado [Transmigración]',
slug: "El_pez_palmera_mascota_del_tirano_discapacitado_[Transmigración]",
imagen: "El_pez_palmera_mascota_del_tirano_discapacitado_[Transmigración].jpg",
tags: "danmei finalizado china-antigua comedia discapacidad lucha-de-poder mascotas matrimonio mpreg ninos no-humano realeza sistema transformacion-animal transmigracion",
autor: "xueshan-fei-hu",
link: "https://drive.google.com/drive/u/4/folders/1nA6cgtLV78sHemShM8oLYfwRx9XGR0gZ"
},

{
titulo: 'El pervertido y el yandere',
slug: "El_pervertido_y_el_yandere",
imagen: "El_pervertido_y_el_yandere.jpg",
tags: "danmei finalizado moderno protagonista-gong smut transportado-a-otro-mundo yandere",
autor: "heng-heng",
link: "https://drive.google.com/drive/u/4/folders/1Sf-PUYwpYYGVycWLGrhWmXbYbkzNb66L"
},

{
titulo: 'El mayordomo demonio sigue motivado hoy',
slug: "El_mayordomo_demonio_sigue_motivado_hoy",
imagen: "El_mayordomo_demonio_sigue_motivado_hoy.jpg",
tags: "danmei finalizado futurista no-humano sistema transportado-a-otro-mundo",
autor: "daozhang-danfei",
link: "https://drive.google.com/drive/u/4/folders/19sB8kUcXy9o0lLYnK9AVjEfqu_XiEWgG"
},

{
titulo: 'El lector y el protagonista definitivamente tienen que estar en un amor verdadero',
slug: "El_lector_y_el_protagonista_definitivamente_tienen_que_estar_en_un_amor_verdadero",
imagen: "El_lector_y_el_protagonista_definitivamente_tienen_que_estar_en_un_amor_verdadero.jpg",
tags: "danmei finalizado fantasia comedia discapacidad no-humano smut transportado-a-otro-mundo yandere",
autor: "tui",
link: "https://drive.google.com/drive/u/4/folders/1NL9uB9ycejHqiZJGZQ4_ezvGIYC0G65U"
},

{
titulo: 'El héroe helado anhela el amor',
slug: "El_héroe_helado_anhela_el_amor",
imagen: "El_héroe_helado_anhela_el_amor.jpg",
tags: "danmei finalizado europa-antigua drama punto-de-vista-multiple reencarnacion smut yandere",
autor: "momose-wasabi",
link: "https://drive.google.com/drive/u/4/folders/1iG5kNbFeT8Ml1Fr4Mt-h1Ypbzro-TqXX"
},

{
titulo: '¡El guion no es así!',
slug: "El_guion_no_es_así",
imagen: "El_guion_no_es_así.jpg",
tags: "danmei finalizado multiples-mundos comedia protagonista-gong smut transmigracion",
autor: "ziwuyueyuan",
link: "https://drive.google.com/drive/u/4/folders/1B6NM5-1B1Junnr5qyUxuq2jHieYwJyPG"
},

{
titulo: 'El gato domesticado del emperador zombi',
slug: "El_gato_domesticado_del_emperador_zombi",
imagen: "El_gato_domesticado_del_emperador_zombi.jpg",
tags: "danmei finalizado apocalipsis cultivo mascotas no-humano renacimiento sobrenatural transformacion-animal zombies",
autor: "shuishan",
link: "https://drive.google.com/drive/u/4/folders/1xS1P0fKoxmsGdgFDHn6uKq5T3afCEDKU"
},

{
titulo: 'El Dragón y la "Princesa"',
slug: "El_Dragón_y_la_Princesa",
imagen: "El_Dragón_y_la_Princesa.jpg",
tags: "danmei finalizado europa-antigua gender-bender mpreg no-humano smut realeza",
autor: "some-wailing",
link: "https://drive.google.com/drive/u/4/folders/1V3YQazpGXUbK3WJW7lsozuzaxbwKQmj1"
},

{
titulo: 'El código de práctica del Otaku Renacido para el Apocalipsis',
slug: "El_código_de_práctica_del_Otaku_Renacido_para_el_Apocalipsis",
imagen: "El_código_de_práctica_del_Otaku_Renacido_para_el_Apocalipsis.jpg",
tags: "danmei finalizado apocalipsis agricultura comedia renacimiento slice-of-life zombies",
autor: "warm-charge",
link: "https://drive.google.com/drive/u/4/folders/1EGLuxZ8TRZ_QUkUke-r6oGunvcR-BySv"
},

{
titulo: 'El amante leal del príncipe',
slug: "El_amante_leal_del_príncipe",
imagen: "El_amante_leal_del_príncipe.jpg",
tags: "danmei finalizado china-antigua comedia realeza transmigracion",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/1RoLYsMM1ZqwcoVmCoq5b4BQsvZADEjFS"
},

{
titulo: 'Diario de crianza del esposo de la Edad de Piedra',
slug: "Diario_de_crianza_del_esposo_de_la_Edad_de_Piedra",
imagen: "Diario_de_crianza_del_esposo_de_la_Edad_de_Piedra.jpg",
tags: "danmei finalizado tribal agricultura comedia compromiso-roto cultivo hombres-bestia protagonista-gong slice-of-life transmigracion",
autor: "jue-jue",
link: "https://drive.google.com/drive/u/4/folders/18e32PD6y8n3MGWF75hzZbxpSpdiCEScK"
},

{
titulo: 'Desterrado a otro mundo',
slug: "Desterrado_a_otro_mundo",
imagen: "Desterrado_a_otro_mundo.jpg",
tags: "danmei finalizado tribal agricultura enemigos-a-amantes mpreg ninos sistema transmigracion",
autor: "yi-ren-bei",
link: "https://drive.google.com/drive/u/4/folders/1rlQo7n5z-7U2iqRDwA3W9XTn44oqtx0m"
},

{
titulo: 'Después de ser obligada a casarse con el malvado general estelar',
slug: "Después_de_ser_obligada_a_casarse_con_el_malvado_general_estelar",
imagen: "Después_de_ser_obligada_a_casarse_con_el_malvado_general_estelar.jpg",
tags: "danmei finalizado china-antigua comedia drama lucha-de-poder matrimonio-arreglado",
autor: "gu-sanyue",
link: "https://drive.google.com/drive/u/4/folders/18089PCokjfiFSJbsImYbLAYYLxU-qhWp"
},

{
titulo: 'Después de que el dios discapacitado de la guerra se convirtió en mi concubina',
slug: "Después_de_que_el_dios_discapacitado_de_la_guerra_se_convirtió_en_mi_concubina",
imagen: "Después_de_que_el_dios_discapacitado_de_la_guerra_se_convirtió_en_mi_concubina.jpg",
tags: "danmei finalizado china-antigua discapacidad drama lucha-de-poder malentendidos matrimonio-arreglado realeza transmigracion",
autor: "liu-gou-hua",
link: "https://drive.google.com/drive/u/4/folders/1e2XTCvDgBeQtGVkfJ14f_GpAmot3daHd"
},

{
titulo: 'Después de engañar a Shizun para que practicara el cultivo dual, me escapé con su bollo',
slug: "Después_de_engañar_a_Shizun_para_que_practicara_el_cultivo_dual,_me_escapé_con_su_bollo",
imagen: "Después_de_engañar_a_Shizun_para_que_practicara_el_cultivo_dual,_me_escapé_con_su_bollo.jpg",
tags: "danmei finalizado cultivacion comedia cultivo mpreg ninos sistema transmigracion xianxia",
autor: "gongzi-rou",
link: "https://drive.google.com/drive/u/4/folders/1Kra26k154tOZ5Jw6cCwiglzgh5nAg-lT"
},

{
titulo: '¡¡¡Yo, vuestro Emperador, he sido agraviado!!!',
slug: "Yo,_vuestro_Emperador,_he_sido_agraviado",
imagen: "Yo,_vuestro_Emperador,_he_sido_agraviado.jpg",
tags: "danmei finalizado china-antigua comedia realeza reencarnacion sistema transmigracion",
autor: "pu-zuoyou",
link: "https://drive.google.com/drive/u/4/folders/1dVq6nIn16AAhGVmtMZ7rKuI-CzQ8MXwf"
},

{
titulo: 'Asociación de crianza de cachorros',
slug: "Asociación_de_crianza_de_cachorros",
imagen: "Asociación_de_crianza_de_cachorros.jpg",
tags: "danmei finalizado futurista ninos no-humano transportado-a-otro-mundo",
autor: "jiuyi",
link: "https://drive.google.com/drive/u/4/folders/1oaV3wT844Lb5_m7D-2IG7Br_0iOxVT91"
},

{
titulo: 'Amante del papel',
slug: "Amante_del_papel",
imagen: "Amante_del_papel.jpg",
tags: "danmei finalizado moderno amnesia comedia inteligencia-artificial protagonista-gong slice-of-life",
autor: "chu-hanyi-qing",
link: "https://drive.google.com/drive/u/4/folders/1I4vkkGOZnE46V5141G7rpUIkXFlgjlcr"
},

{
titulo: 'Después de convertirse en el demonio interior del protagonista',
slug: "Después_de_convertirse_en_el_demonio_interior_del_protagonista",
imagen: "Después_de_convertirse_en_el_demonio_interior_del_protagonista.jpg",
tags: "danmei finalizado cultivacion cultivo enemigos-a-amantes sistema transmigracion venganza xianxia yandere",
autor: "zeda",
link: "https://drive.google.com/drive/u/4/folders/1Herz-J4fyzDXFYhJsl1nwC_5krrYv8n8"
},

{
titulo: 'Aferrándome a mi hombre',
slug: "Aferrándome_a_mi_hombre",
imagen: "Aferrándome_a_mi_hombre.jpg",
tags: "danmei finalizado multiples-mundos amnesia cultivo no-humano drama yandere",
autor: "hong-yao-yao",
link: "https://drive.google.com/drive/u/4/folders/1_-J1je9S0GNwaMTu89A3sT4LK3iqmVHu"
},

{
titulo: 'Acompañado por un tonto que se dedica a la agricultura',
slug: "Acompañado_por_un_tonto_que_se_dedica_a_la_agricultura",
imagen: "Acompañado_por_un_tonto_que_se_dedica_a_la_agricultura.jpg",
tags: "danmei finalizado china-antigua agricultura comedia ger matrimonio-arreglado mpreg transmigracion",
autor: "jinxiu-yun-ran",
link: "https://drive.google.com/drive/u/4/folders/1GeDB5EscYq3TrAAOHf02TX3bBnW3MjEs"
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
