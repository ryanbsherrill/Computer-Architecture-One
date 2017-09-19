# Computer Architecture

Welcome to the first class on classical Computer Science! Beginning now, you will be studying the underpinnings of the programming lessons that you have practiced previously.

The first pair of sprints in this coursework are about your computer itself: computer architecture. Generic computers are just a large and careful collection of basic electronics components and wires connecting them. Computer architecture is the specific design of a computer.

Computers have grown radically in transistor density and clock speed, but the overall design of your computer has not changed tremendously since the 8086 in 1976 [1](https://en.wikipedia.org/wiki/X86). Modern computers utilized a fixed component architecture, where separate components can be upgraded, swapped, or redesigned for the next version with minimal impact on other components. It helps to visualize these components on a full size ATX form-factor motherboard:

[Image of motherboard]

[LGA-1151 socket](https://en.wikichip.org/wiki/File:FCLGA-1151.svg)

[Kaby Lake Quad Core](https://en.wikichip.org/w/images/thumb/d/dc/kaby_lake_%28quad_core%29_%28annotated%29.png/800px-kaby_lake_%28quad_core%29_%28annotated%29.png)

[Quad core manual diagram](https://en.wikichip.org/w/images/thumb/d/dc/kaby_lake_%28quad_core%29_%28annotated%29.png/800px-kaby_lake_%28quad_core%29_%28annotated%29.png)

[i7 CPU on motherboard](https://commons.wikimedia.org/wiki/File:Intel_i7_4770_CPU_on_an_ASUS_Gryphon_Z87_uATX_motherboard.jpg)

[i7 CPU underside](https://upload.wikimedia.org/wikipedia/commons/c/c9/Core_i7_bottom.png)

## Interrupting the CPU

Polling, Interrupts, and DMA

I/O Bus

### APIC
[Advanced Programmable Interrupt Controller](https://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller)

CPU, ALU, bus, RAM, Registers, Operations

Reading:

[Bus](https://en.wikipedia.org/wiki/Bus_(computing))

[RAM](https://en.wikipedia.org/wiki/Random-access_memory)

Assignment:

Using the ASCII table, a stack, a program counter, and a tiny set of instructions: set, copy, and print, write a program that contains an array of instructions, a "CPU" that reads them starting at index 0, and another array containing the ASCII values, print "Hello world" using node.

The following command line input:

    node microbusarchitecture.js

Should prodsuce

    Hello World!

Using the above specified architecture. `console.log('Hello World!')` is not sufficient.
# Computer-Architecture-One
