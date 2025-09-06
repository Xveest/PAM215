import tkinter as tk
from act2 import act2

class App:
    def __init__(self, root):
        self.root = root
        self.root.title("Reglamento y Fechas de Parciales")
        
        self.act2_instance = act2()
        
        self.text_area = tk.Text(root, wrap=tk.WORD, font=("Helvetica", 12))
        self.text_area.pack(expand=True, fill=tk.BOTH)
        
        self.button_frame = tk.Frame(root)
        self.button_frame.pack(fill=tk.X)
        
        self.reglamento_button = tk.Button(self.button_frame, text="Reglamento", command=self.show_reglamento)
        self.reglamento_button.pack(side=tk.LEFT, expand=True, fill=tk.X)
        
        self.fechas_button = tk.Button(self.button_frame, text="Fechas de Parciales", command=self.show_fechas)
        self.fechas_button.pack(side=tk.LEFT, expand=True, fill=tk.X)
        
        self.porcentajes_button = tk.Button(self.button_frame, text="Porcentajes por Parcial", command=self.show_porcentajes)
        self.porcentajes_button.pack(side=tk.LEFT, expand=True, fill=tk.X)
        
    def show_reglamento(self):
        self.text_area.delete(1.0, tk.END)
        self.text_area.insert(tk.END, self.act2_instance.reglamento())
        
    def show_fechas(self):
        self.text_area.delete(1.0, tk.END)
        self.text_area.insert(tk.END, self.act2_instance.fechasdeparciales())
        
    def show_porcentajes(self):
        self.text_area.delete(1.0, tk.END)
        self.text_area.insert(tk.END, self.act2_instance.porcentajesporparcial())

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()