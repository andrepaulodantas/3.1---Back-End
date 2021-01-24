/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ATIVIDADE5;

import javax.swing.JFrame;

/**
 *
 * @author andre
 */
public class atividade5 extends JFrame{
	
    public final static int N = 1_000;
    
	public atividade5(){
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setTitle("Gráfico Barra");
		setSize(950,700);
		setLocationRelativeTo(null);
		criarGrafico();
		setVisible(true);
	}
	
	public void criarGrafico(){
	
		DefaultCategoryDataset barra = new DefaultCategoryDataset();
		barra.setValue(100, "VALORES", "");
		
		JFreeChart grafico = ChartFactory.createBarChart("A","B","C",barra,PlotOrientation.VERTICAL,true);
		ChartPanel painel = new ChartPanel(grafico);
		add(painel);
		
	}

	public static void main(String[] args) {
		
		new atividade5();
		/* Escolhendo os seguintes parametros*/
		int x0 = 17; /* Semente */
		float a = 1; /* Termo multiplicador */
		int c = 121; /* Termo multiplicador */
		float m = 256; /* Parametro do Modulo */
		int nValrand = N; /* Numero de numeros randomicos */
		float[] valrand = new float[nValrand]; /* Vetor de numeros randomicos */

		System.out.println("Gerando numeros aleatorios com " + N + " elementos ");

		valrand[0] = x0;

		for(int i = 1; i < nValrand; i++) {
			/* Metodo de Congruencia Linear */
			valrand[i] = (float)(((double)(valrand[i - 1] * a + c)) % ((double)m));
		}

		for(int i = 1; i < nValrand; i++) {
			valrand[i] = valrand[i] / (m - 1);
		}

		for(int i = 0; i < nValrand; i++) {
			System.out.printf("%.1f ", valrand[i]);
		}
	}
	
	
	
}
























