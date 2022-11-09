#test para flujo de archivos
def s (f):
    s = f
    return s
    

print(s("dsfdsafds"))

"--------------------------------------------"
def lee_arreglo_reales():
    return [float(x) for x in input ("Arreglo:").split(", ")]
print(lee_arreglo_reales())


def suma_arreglo(A):
    s = 0
    for x in A:
        s += x
    return s
print(suma_arreglo([1,-3,4,11,6]))

print("------------------------")

def cuadrados_matriz(X):
    Y = []
    for i in range(len(X)):
        fila = []
        for j in range(len(X[i])):
            fila.append (X[i][j]*X[i][j])
        Y.append(fila)
    return Y

print(cuadrados_matriz([[1,-3, 2],[4,11,-1]]))

