# Função de geração de numero aleatorios
def linearCongruentialMethod(Xo, m, a, c, 
                            randomNums, 
                            noOfRandomNums): 

# inicialização da semente 
    randomNums[0] = Xo 

   
    for i in range(1, noOfRandomNums): 

        
        randomNums[i] = ((randomNums[i - 1] * a) +
                                                c) % m 


if __name__ == '__main__': 
    
 # semente
    Xo = 17 
      
    # parametro do modulo
    m = 256
      
    # termo multiplicador
    a = 1
      
    # termo multiplicador
    c = 121
  
  
    noOfRandomNums = 10000

    # To store random numbers 
    randomNums = [0] * (noOfRandomNums) 

    # Function Call 
    linearCongruentialMethod(Xo, m, a, c, 
                            randomNums, 
                            noOfRandomNums) 
    saida = []
    # Print the generated random numbers 
    for i in randomNums:
        saida=randomNums[i]
        print(i/m, end = " ") 

# This code is contributed by mohit kumar 29 

import matplotlib.pyplot as plt

Lista = [float(i) / 10 for i in randomNums]

plt.hist(Lista, 100, rwidth=1)
plt.title('Para 100')
plt.ylabel('Frequência ')
plt.show()

Lista = [float(i) / 10 for i in randomNums]

plt.hist(Lista, 100, rwidth=1)
plt.title('Para 1000')
plt.ylabel('Frequência ')
plt.show()

