# 📊 Módulo 1 - Introdução à Análise de Dados com Python

## 🔹 1. O que é Análise de Dados?
A **Análise de Dados** é o processo de coletar, organizar e interpretar informações para extrair insights. No mundo atual, onde dados são gerados a todo momento, **saber analisar dados é essencial para tomar decisões estratégicas**.

## 🔹 2. Por que usar Python para Análise de Dados?
Python é a linguagem mais utilizada para análise de dados por conta de:
✅ Facilidade de uso e sintaxe simples  
✅ Grande quantidade de bibliotecas como `pandas`, `numpy` e `matplotlib`  
✅ Suporte para Machine Learning e Inteligência Artificial  

## 🔹 3. Instalando as Ferramentas
Antes de começar, precisamos instalar as bibliotecas essenciais. Execute o seguinte código no **Google Colab** ou no seu ambiente local:

```python
!pip install pandas numpy matplotlib seaborn
```

## 🔹 4. Primeiro Código com `pandas`
Agora, vamos importar as bibliotecas e carregar um pequeno conjunto de dados:

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Criando um DataFrame de exemplo
dados = {
    'Nome': ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'],
    'Idade': [23, 45, 31, 22, 39],
    'Salario': [2500, 5000, 4000, 3200, 5200]
}

df = pd.DataFrame(dados)
print(df)
```

### **Saída esperada:**
```
      Nome  Idade  Salario
0     Ana     23     2500
1  Bruno     45     5000
2  Carlos    31     4000
3  Daniela   22     3200
4  Eduardo   39     5200
```

## 🔹 5. Criando Gráficos com `matplotlib` e `seaborn`
Agora, vamos gerar um gráfico de barras para visualizar os salários:

```python
plt.figure(figsize=(8,5))
sns.barplot(x='Nome', y='Salario', data=df, palette='viridis')
plt.xlabel('Nome')
plt.ylabel('Salário')
plt.title('Salário por Pessoa')
plt.show()
```

🔹 **Isso cria um gráfico que mostra os salários de cada pessoa no dataset.**

## 🔹 6. Exercícios Práticos
### **1️⃣ Filtrando Dados**
Filtre todas as pessoas que ganham mais de R$4000:
```python
# Seu código aqui
```

### **2️⃣ Adicionando uma Nova Coluna**
Crie uma nova coluna chamada **"Categoria"**, que classifique os salários como "Baixo", "Médio" ou "Alto".
```python
# Seu código aqui
```

### **3️⃣ Gerando um Gráfico de Dispersão**
Crie um gráfico de dispersão mostrando a relação entre **Idade** e **Salário**:
```python
# Seu código aqui
```

## 📌 **Próximo Módulo:** Manipulação Avançada de Dados com `pandas` 🚀
