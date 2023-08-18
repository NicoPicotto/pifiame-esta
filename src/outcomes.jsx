const outcomes = {
	critico: {
		cortante: [
			'Con una precisión mortal, tu hoja corta a través de la armadura del enemigo, dejando una herida sangrante que causa 1d4 PG de daño adicional durante su próximo turno.',
			'Con un corte rápido y profundo, desarmas a tu oponente, dejándolo vulnerable durante 1d2 turnos.',
			'Tu espada corta un tendón crucial, reduciendo a la mitad el movimiento del enemigo durante 2 turnos.',
			'Con un movimiento ágil, produces un corte en el rostro del enemigo, dejándolo parcialmente cegado y otorgándote ventaja en tu próximo ataque por 1 turno.',
			'Tu hoja se desliza a través de un punto vital, otorgándote un ataque extra por la adrenalina del momento.',
			'Tu ataque cortante deja una herida tan profunda que el enemigo cae al suelo, quedando derribado durante 1d4 turnos.',
			'Un corte preciso deja el escudo del enemigo inutilizable, reduciendo su defensa durante 3 turnos.',
			'Con un giro sorpresa, cortas la bolsa de componentes mágicos del enemigo, impidiéndole lanzar conjuros que requieran componentes materiales durante 1d4 turnos.',
			'Un corte en la pierna hace que tu oponente cojee, dándote ventaja en ataques de oportunidad durante 2 turnos.',
			'Tu arma se desliza con tanta precisión que puedes elegir a qué parte del cuerpo apuntar, dando lugar a un daño crítico adicional de 1d6 PG.',
		],
		perforante: [
			'Tu puntería es perfecta, y logras atravesar un punto vital del enemigo, causándole 1d8 PG de daño adicional.',
			'Con una estocada veloz, inmovilizas temporalmente la extremidad de tu oponente, otorgándote ventaja en tu próximo ataque.',
			'Tu lanza se hunde profundamente, haciendo que el enemigo sangre profusamente y reciba 1d6 PG de daño en su próximo turno.',
			'Con precisión quirúrgica, logras perforar la bolsa de componentes mágicos del enemigo, impidiéndole lanzar conjuros que requieran componentes materiales durante 2 turnos.',
			'El impacto perforante deja a tu oponente sin aliento, reduciendo a la mitad su movimiento durante 3 turnos.',
			'Con tu habilidad, logras atravesar la armadura del enemigo, reduciendo su CA en 2 puntos durante 1d4 turnos.',
			'Tu proyectil encuentra su camino a los ojos del enemigo, dejándolo ciego durante 1 turno.',
			'Con un impulso feroz, tu arma perforante deja al enemigo en un estado vulnerable, todos los ataques contra él tienen ventaja durante 1 turno.',
			'Tu ataque acierta tan precisamente que incapacitas una de las extremidades del enemigo, dándole desventaja en su próximo ataque.',
			'El golpe es tan potente que el enemigo queda aturdido, perdiendo su próximo turno.',
		],
		contundente: [
			'Con un golpe poderoso, aturdes a tu enemigo, dejándolo incapacitado durante 1d4 turnos.',
			'Tu mazo se estrella contra la armadura del enemigo, reduciendo su CA en 2 puntos durante 3 turnos debido a la deformación del metal.',
			'El impacto es tan fuerte que tu oponente queda derribado, y debe pasar su siguiente turno levantándose.',
			'Con una fuerza tremenda, causas una conmoción cerebral temporal a tu enemigo, dándole desventaja en todas sus acciones durante 1d2 turnos.',
			'El sonido del impacto resuena por el campo de batalla, intimidando a otros enemigos cercanos y otorgándote ventaja en tu siguiente tirada de intimidación.',
			'Con un golpe en el punto correcto, rompes el arma del enemigo, dejándolo desarmado hasta que la recupere o reemplace.',
			'El poder de tu golpe empuja al enemigo 10 pies hacia atrás, interrumpiendo cualquier conjuro que estuviera lanzando.',
			'Tu golpe contundente deja un moretón masivo, causando 1d6 PG de daño adicional por el trauma interno.',
			'La fuerza de tu ataque deja al enemigo sin respiración, reduciendo a la mitad su movimiento durante 2 turnos.',
			'Con un movimiento rápido, golpeas las piernas del enemigo, dejándolo paralizado por 1 turno.',
		],
	},
	pifia: {
		cortante: [
			'Al intentar atacar, tu espada se engancha en algo, dejándote expuesto a un contraataque y otorgando ventaja al enemigo en su próximo ataque.',
			'Mientras balanceas tu arma, resbalas, quedándote en el suelo y otorgando ventaja al siguiente ataque enemigo contra ti durante 1 turno.',
			'Tu ataque es tan descontrolado que accidentalmente haces un corte a un aliado cercano, causándole 1d6 PG de daño.',
			'Tu arma se queda atascada en una pared o árbol, dejándote sin ella hasta que pases un turno recuperándola.',
			'Intentas un corte poderoso, pero terminas girando en círculo, desorientándote y otorgando ventaja en todos los ataques en tu contra durante 1 turno.',
			'Tu hoja choca contra el suelo, causando chispas que te ciegan temporalmente durante 1d2 turnos.',
			'En un intento de maniobra acrobática, te desequilibras y caes, perdiendo tu próximo turno.',
			'Tu ataque falla tan estrepitosamente que el enemigo tiene la oportunidad de realizar un ataque de oportunidad contra ti.',
			'Al intentar atacar, tu espada se rompe en dos, dejándote sin arma hasta que la repares.',
			'En un corte fallido, golpeas a ti mismo, sufriendo 1d4 PG de daño.',
		],
		perforante: [
			'Tu estocada falla estrepitosamente, y en el proceso, dejas expuesta una parte vital, otorgando ventaja al siguiente ataque enemigo contra ti.',
			'Mientras lanzas tu proyectil, este rebota y termina en una zona peligrosa, causándote 1d4 PG de daño.',
			'Tu intento de atravesar al enemigo es tan descontrolado que te desequilibras, otorgando un ataque de oportunidad al enemigo.',
			'El arma se atasca en un objeto cercano, y debes pasar 1 turno recuperándola.',
			'Un movimiento incorrecto causa que tu arma se rompa, necesitarás repararla o reemplazarla.',
			'Al intentar un ataque, tu arma se desliza de tus manos y termina a 10 pies de distancia en una dirección aleatoria.',
			'Tu puntería es terrible en este ataque, y terminas golpeando a un aliado cercano, causándole 1d6 PG de daño.',
			'Al lanzar tu proyectil, este se desvía y rompe uno de tus objetos valiosos.',
			'Un fallo en tu técnica te hace caer al suelo, quedando propenso.',
			'Tu ataque es tan predecible que el enemigo fácilmente lo esquiva y te burla, reduciendo tu moral y otorgándote desventaja en tu próximo ataque.',
		],
		contundente: [
			'En tu intento por golpear, pierdes el equilibrio y quedas propenso, otorgando ventaja en el próximo ataque enemigo contra ti.',
			'El golpe es tan descontrolado que rebotas y te golpeas a ti mismo, causándote 1d4 PG de daño.',
			'Al balancear tu arma, calculas mal y golpeas a un aliado cercano, causándole 1d6 PG de daño.',
			'El arma se escapa de tus manos y queda a 15 pies de distancia en una dirección aleatoria.',
			'Tu mazo choca contra una superficie dura, enviando vibraciones dolorosas a través de tu brazo y otorgándote desventaja en tu próximo ataque.',
			'Te esfuerzas demasiado en el golpe, quedando agotado y perdiendo tu siguiente acción de movimiento.',
			'Un movimiento erróneo tira de un músculo, dándote desventaja en todos los ataques con ese arma por 3 turnos.',
			'Al balancear tu arma, destruyes accidentalmente uno de tus propios objetos valiosos.',
			'El enemigo esquiva tu ataque fácilmente y te burla, reduciendo tu moral y causando que tu próximo ataque tenga desventaja.',
			'En un intento de realizar un golpe poderoso, tu arma se queda atascada en el suelo, y debes pasar 1 turno liberándola.',
		],
	},
};

export default outcomes;
