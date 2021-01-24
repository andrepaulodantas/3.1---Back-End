#include <proeikon>

int main (int argc, char**argr){

IMGGRY f;

le(f,argv[1]);

int hist [256];

for (int i=0; i<256; i++)

hist =0;

for (int x=0; x<f.nl();x++){

for(int y=0;y<f.nc();y++){

int nivel = f(x,y);

hist [nivel]+=1;

}

}

IMGGRY h (100,255,0); float max = 0;

for(int i=0;i<256;i++){

if(max < hist)

max = hist;

}

for (int i=0;i<256;i++){

int y (100 - z,i) = 255;

}

imp(h,"histograma.jpg");

}
