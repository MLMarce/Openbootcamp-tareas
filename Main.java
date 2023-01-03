package introduccionAlaProgramacion;

public class Main {
    
     public static void main(String[] args) {
        suma(42, 53, 12);
        
        Coche miCoche = new Coche();

        miCoche.AgregarPuertas();
    }
    

    public static int suma(int a, int b, int c){
        return a + b + c;
    }

    
}



//segunda parte


class Coche {
    public int Puertas = 0;

    public void AgregarPuertas(){
        this.Puertas++;
    }
}