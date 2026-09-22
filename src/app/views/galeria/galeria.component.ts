import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GaleriaItem {
  id: number;
  categoria: string;
  titulo: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  selectedGaleria: string = 'Todos';
  modalImage: GaleriaItem | null = null;

  items: GaleriaItem[] = [
    {
      id: 1,
      categoria: 'Nails-Art',
      titulo: 'Diseño Holográfico & Perlas',
      imagenUrl: 'https://content25.lecturas.com/medio/2024/12/03/unas-2025_fd81e834_241203124309_1200x1500.webp'
    },
    {
      id: 2,
      categoria: 'Manicura',
      titulo: 'Manicura Francesa Pastel',
      imagenUrl: 'https://i.pinimg.com/736x/ee/ef/42/eeef425fe87c1335a7d83bff767daed4.jpg'
    },
    {
      id: 3,
      categoria: 'Pedicura',
      titulo: 'Pedicura Spa Rose Gold',
      imagenUrl: 'https://i.pinimg.com/736x/fd/2e/7b/fd2e7bc15b6155ad6e9ecaa5583089a0.jpg'
    },
    {
      id: 4,
      categoria: 'Pedicura',
      titulo: 'Esmaltado Francés en Pies',
      imagenUrl: 'https://i.pinimg.com/236x/ca/1d/f2/ca1df28568a7da0dfa439b6e684b10b7.jpg'
    },
    {
      id: 5,
      categoria: 'Manicura',
      titulo: 'Esmaltado Nude Glaseado',
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZWJ69jb81umc3Sb6UsjU8a7euKrSm93rqg&s'
    },
    {
      id: 6,
      categoria: 'Pedicura',
      titulo: 'Pedicura Marina & Hidratación',
      imagenUrl: 'https://i.pinimg.com/236x/00/79/2f/00792faadc31cc96c077264c791caa77.jpg'
    },
    {
      id: 7,
      categoria: 'Nails-Art',
      titulo: 'Efecto Mármol & Hojilla Oro',
      imagenUrl: 'https://i.pinimg.com/236x/17/e2/ef/17e2ef3ba432737f0417776eaef62467.jpg'
    },
    {
      id: 8,
      categoria: 'Manicura',
      titulo: 'Rojo Carmesí Semipermanente',
      imagenUrl: 'https://i.pinimg.com/736x/11/ed/70/11ed70025c0392113597928a3f13dd1e.jpg'
    },
    {
      id: 9,
      categoria: 'Nails-Art',
      titulo: 'Flores Botánicas a Mano Alzada',
      imagenUrl: 'https://i.pinimg.com/236x/c4/c8/1e/c4c81e7a0757815b20e22b7e41499c49.jpg'
    },
    {
      id: 10,
      categoria: 'Pedicura',
      titulo: 'Pedicura Coral de Verano',
      imagenUrl: 'https://i.pinimg.com/236x/5e/6f/4b/5e6f4be3c5d4470d81421919918fa797.jpg'
    },
    {
      id: 11,
      categoria: 'Manicura',
      titulo: 'Almendra Glazed Donut',
      imagenUrl: 'https://i.pinimg.com/236x/d4/93/bc/d493bc8b5a81fb2baf51a160d65e0fc1.jpg'
    },
    {
      id: 12,
      categoria: 'Nails-Art',
      titulo: 'Degradado Ombré & Glitter',
      imagenUrl: 'https://i.pinimg.com/236x/47/10/53/47105318d2c3b8386840b10fef1c7d35.jpg'
    }
  ];

  filteredItems: GaleriaItem[] = [...this.items];

  filterByGaleria(category: string) {
    this.selectedGaleria = category;

    if (category === 'Todos') {
      this.filteredItems = [...this.items];
      return;
    }

    this.filteredItems = this.items.filter(item => item.categoria === category);
  }

  openModal(item: GaleriaItem) {
    this.modalImage = item;
  }

  closeModal() {
    this.modalImage = null;
  }
}
