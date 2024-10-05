const conditions = [
   {
      name: "😑 Cegado",
      description: `Mientras tengas la condición de Cegado, experimentas los siguientes efectos:

	•	No puedes ver. No puedes ver y automáticamente fallas cualquier chequeo de habilidad que requiera visión.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja, y tus tiradas de ataque tienen desventaja.`,
   },
   {
      name: "🤩 Hechizado",
      description: `Mientras tengas la condición de Hechizado, experimentas los siguientes efectos:

	•	No puedes dañar al hechicero. No puedes atacar al hechicero hacerlo objetivo con habilidades dañinas o efectos mágicos.
	•	Ventaja social. El hechicero tiene ventaja en cualquier chequeo de habilidad para interactuar contigo socialmente.`,
   },
   {
      name: "👂 Ensordecido",
      description: `Mientras tengas la condición de Ensordecido, experimentas el siguiente efecto:

	•	No puedes oír. No puedes oír y automáticamente fallas cualquier chequeo de habilidad que requiera audición.`,
   },
   {
      name: "😱 Asustado",
      description: `Mientras tengas la condición de Asustado, experimentas los siguientes efectos:

	•	Afecta chequeos de habilidad y ataques. Tienes desventaja en los chequeos de habilidad y en las tiradas de ataque mientras la fuente del miedo esté dentro de 	línea de visión.
	•	No puedes acercarte. No puedes acercarte voluntariamente a la fuente del miedo.`,
   },
   {
      name: "👟 Agarrado",
      description: `Mientras tengas la condición de Agarrado, experimentas los siguientes efectos:

	•	Velocidad 0. Tu velocidad es 0 y no puede aumentar.
	•	Ataques afectados. Tienes desventaja en las tiradas de ataque contra cualquier objetivo que no sea quien te ha agarrado.
	•	Movible. La criatura que te agarró puede arrastrarte o llevarte cuando se mueve, pero cada pie de movimiento le cuesta 1 pie adicional a menos que seas tamaño 	Diminuto o dos o más tamaños menor que ella.`,
   },
   {
      name: "🤕 Incapacitado",
      description: `Mientras tengas la condición de Incapacitado, experimentas los siguientes efectos:

	•	Inactivo. No puedes realizar ninguna acción, acción adicional ni reacción.
	•	Sin concentración. Tu concentración se rompe.
	•	Sin habla. No puedes hablar.
	•	Sorprendido. Si estás incapacitado al tirar iniciativa, tienes desventaja en la tirada.`,
   },
   {
      name: "👻 Invisible",
      description: `Mientras tengas la condición de Invisible, experimentas los siguientes efectos:

	•	Sorpresa. Si estás invisible cuando tiras iniciativa, tienes ventaja en la tirada.
	•	Oculto. No te afectan los efectos que requieren que su objetivo sea visto, a menos que el creador del efecto pueda verte de alguna manera. Cualquier equipo que estés usando o llevando también está oculto.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen desventaja, y tus tiradas de ataque tienen ventaja. Si alguna criatura puede verte de alguna manera, no obtienes este beneficio contra ella.`,
   },
   {
      name: "📌 Paralizado",
      description: `Mientras tengas la condición de Paralizado, experimentas los siguientes efectos:

	•	Incapacitado. Tienes la condición de Incapacitado.
	•	Velocidad 0. Tu velocidad es 0 y no puede aumentar.
	•	Salvaciones afectadas. Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja.
	•	Golpes críticos automáticos. Cualquier tirada de ataque que te golpee es un golpe crítico si el atacante está a 5 pies de ti.`,
   },
   {
      name: "🗿 Petrificado",
      description: `Mientras tengas la condición de Petrificado, experimentas los siguientes efectos:

	•	Transformado en una sustancia inanimada. Eres transformado, junto con cualquier objeto no mágico que lleves puesto o cargues, en una sustancia sólida inanimada (usualmente piedra). Tu peso se incrementa por un factor de diez y dejas de envejecer.
	•	Incapacitado. Tienes la condición de Incapacitado.
	•	Velocidad 0. Tu velocidad es 0 y no puede aumentar.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja.
	•	Salvaciones afectadas. Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.
	•	Resistencia al daño. Tienes resistencia a todo el daño.
	•	Inmunidad al veneno. Tienes inmunidad a la condición de Envenenado.`,
   },
   {
      name: "🤢 Envenenado",
      description: `Mientras tengas la condición de Envenenado, experimentas el siguiente efecto:

	•	Afecta chequeos de habilidad y ataques. Tienes desventaja en las tiradas de ataque y en los chequeos de habilidad.`,
   },
   {
      name: "🙃 Tumbado",
      description: `Mientras tengas la condición de Tumbado, experimentas los siguientes efectos:

	•	Movimiento restringido. Tus únicas opciones de movimiento son arrastrarte o gastar una cantidad de movimiento igual a la mitad de tu velocidad (redondeando hacia abajo) para ponerte de pie y, por lo tanto, terminar la condición. Si tu velocidad es 0, no puedes levantarte.
	•	Ataques afectados. Tienes desventaja en las tiradas de ataque. Una tirada de ataque contra ti tiene ventaja si el atacante está a 5 pies de ti. De lo contrario, esa tirada de ataque tiene desventaja.`,
   },
   {
      name: "🔒 Restringido",
      description: `Mientras tengas la condición de Restringido, experimentas los siguientes efectos:

	•	Velocidad 0. Tu velocidad es 0 y no puede aumentar.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja, y tus tiradas de ataque tienen desventaja.
	•	Salvaciones afectadas. Tienes desventaja en las tiradas de salvación de Destreza.`,
   },
   {
      name: "🤯 Aturdido",
      description: `Mientras tengas la condición de Aturdido, experimentas los siguientes efectos:

	•	Incapacitado. Tienes la condición de Incapacitado.
	•	Salvaciones afectadas. Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja.`,
   },
   {
      name: "😵 Inconsciente",
      description: `Mientras tengas la condición de Inconsciente, experimentas los siguientes efectos:

	•	Inerte. Tienes las condiciones de Incapacitado y Caído, y sueltas lo que estés sosteniendo. Cuando esta condición termina, permaneces Caído.
	•	Velocidad 0. Tu velocidad es 0 y no puede aumentar.
	•	Ataques afectados. Las tiradas de ataque contra ti tienen ventaja.
	•	Salvaciones afectadas. Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.
	•	Golpes críticos automáticos. Cualquier tirada de ataque que te golpee es un golpe crítico si el atacante está a 5 pies de ti.
	•	Inconsciente del entorno. No eres consciente de tu entorno.`,
   },
   {
      name: "😓 Exhausto",
      description: `Mientras tengas la condición de Exhausto, experimentas los siguientes efectos:

	•	Niveles de Exhausto. Esta condición es acumulativa. Cada vez que la recibes, obtienes 1 nivel de Exhausto. Muéres si tu nivel de Exhausto es 6.
	•	Pruebas de D20 afectadas. Cuando haces una prueba de D20, la tirada se reduce en 2 veces tu nivel de Exhausto.
	•	Velocidad reducida. Tu velocidad se reduce en un número de pies igual a 5 veces tu nivel de Exhausto.
	•	Eliminar niveles de Exhausto. Terminar un descanso largo elimina 1 de tus niveles de Exhausto. Cuando tu nivel de Exhausto llega a 0, la condición termina.`,
   },
];

export default conditions;
