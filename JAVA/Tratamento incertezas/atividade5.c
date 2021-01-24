#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#define N 15

/**
 *
 * @author andre
 */
int main(void)
{
    int i;
    float m;

    printf("Gerando %d valores aleatorios:\n\n", N);
    /* Utilizando srand para gerar semente diferente
     para a funcao RAND */

    srand(time(NULL));
    for (i = 0; i < N; i++){
    /* gerando valores aleatórios entre zero e 10*/
    m = rand() % 10;
    /* gerando valores aleatórios entre zero e 1 */
    printf("%.1f \n", m/10);
    }
    return 0;
}