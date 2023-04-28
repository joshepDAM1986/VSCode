import random
comienza = random.randint(1, 6)
if comienza <= 3:
    print("Ha salido",comienza)
    print('Comienza el jugador')
else:
    print("Ha salido",comienza)
    print('Comienza el PC')
