import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  sender: 'user' | 'bot';
  message: string;
  time: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  isOpen = false;
  inputText = '';
  isTyping = false;

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      message: '¡Hola! Bienvenida a NuTaTaMo Spa ✨ ¿En qué puedo asesorarte hoy sobre nuestros servicios, diseños o citas?',
      time: this.getCurrentTime()
    }
  ];

  quickReplies: string[] = [
    'Precios y Servicios',
    '¿Cómo agendar cita?',
    'Horarios y Ubicación',
    'Nail Art Personalizado'
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.send();
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;
  }

  sendQuick(reply: string) {
    this.inputText = reply;
    this.send();
  }

  send() {
    const text = this.inputText.trim();
    if (!text) return;

    this.messages.push({
      sender: 'user',
      message: text,
      time: this.getCurrentTime()
    });

    this.inputText = '';
    this.isTyping = true;

    setTimeout(() => {
      this.isTyping = false;
      const botResponse = this.generateResponse(text);
      this.messages.push({
        sender: 'bot',
        message: botResponse,
        time: this.getCurrentTime()
      });
    }, 700);
  }

  private generateResponse(query: string): string {
    const q = query.toLowerCase();

    if (q.includes('precio') || q.includes('costo') || q.includes('cuanto') || q.includes('cuánto') || q.includes('servicio')) {
      return 'Nuestros servicios principales van desde $25 (Manicura Clásica), $45 (Semipermanente Gel), $60 (Uñas Acrílicas) hasta $55 (Pedicura Spa Relax). Puedes ver la lista completa en la sección Servicios ✨';
    }

    if (q.includes('cita') || q.includes('agendar') || q.includes('reservar') || q.includes('reserva')) {
      return 'Puedes agendar en línea fácilmente haciendo clic en el botón "Reservar Cita" en el menú superior o en la página de Reservas. ¡Solo te tomará un minuto!';
    }

    if (q.includes('horario') || q.includes('abierto') || q.includes('abre') || q.includes('cierra') || q.includes('hora')) {
      return 'Estamos abiertos de Lunes a Viernes de 9:00 a 20:00, Sábados de 9:00 a 18:00 y Domingos de 10:00 a 16:00.';
    }

    if (q.includes('donde') || q.includes('dónde') || q.includes('ubicacion') || q.includes('ubicación') || q.includes('direccion') || q.includes('dirección')) {
      return 'Nos encontramos en Calle de la Belleza 123, Centro Comercial Plaza Elegante, Local 45 (Madrid). Disponemos de parqueadero gratuito para clientas.';
    }

    if (q.includes('nail art') || q.includes('diseño') || q.includes('diseno') || q.includes('decoracion')) {
      return '¡Nos encanta el Nail Art! Recreamos efectos mármol, baby boomer, francesas de colores, pedrería y dibujos a mano alzada. Puedes ver nuestro catálogo en la Galería.';
    }

    return '¡Con mucho gusto te ayudamos! Si deseas agendar, puedes ir a la sección Reservar Cita, o si prefieres hablar directamente, llámanos al +57 91 123 4567 💖';
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom() {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch {
      // scroll container might not be rendered yet
    }
  }
}
