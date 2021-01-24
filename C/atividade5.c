/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   main.c
 * Author: andre
 *
 * Created on 14 de Dezembro de 2020, 23:38
 */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define N 1000

int main()
{
    /* Escolhendo os seguintes parametros*/
    int X0 = 17;                /* Semente */
    float a = 1;                  /* Termo multiplicador */
    int c = 121;                /* Termo multiplicador */
    float m = 256;                /* Parametro do Modulo */
    int nValrand = N;           /* Numero de numeros randomicos */
    float Valrand[nValrand];   /* Vetor de numeros randomicos */

    printf("Gerando numeros aleatorios com %d elementos \n", N);

    Valrand[0] = X0;

    for (int i = 1; i < nValrand; i++) {
        /* Metodo de Congruencia Linear */
        Valrand[i] = fmod(((Valrand[i - 1] * a) + c), m);
    }

    for (int i = 1; i < nValrand; i++) {
        Valrand[i] = Valrand[i] / (m-1);
    }

    for (int i = 0; i < nValrand; i++) {
        printf("%.1f ", Valrand[i]);
    }

    return 0;
}
