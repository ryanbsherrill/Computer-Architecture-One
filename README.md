# Computer Architecture

Welcome to the first class on classical Computer Science! Beginning now, you will be studying the underpinnings of the programming lessons that you have practiced previously.

The first pair of sprints in this coursework are about your computer itself: computer architecture. Generic computers are just a large and careful collection of basic electronics components and wires connecting them. Computer architecture is the specific design of a computer.

## Basic Computer Engineering

We can't start our study of computers without a brief discussion of computer engineering. Know what the following words mean:

- Transistor
- Logic gate
- RS Flip Flop

## Architecture

![Basic Architecture](https://www.lucidchart.com/publicSegments/view/8e06c9e0-0087-4c53-9486-c5aaca137ff3/image.png)

Computers have grown radically in transistor density and clock speed, but the overall design of your computer has not changed tremendously since the 8086 in 1976 [1](https://en.wikipedia.org/wiki/X86). Modern computers utilized a fixed component architecture, where separate components can be upgraded, swapped, or redesigned for the next version with minimal impact on other components. It helps to visualize these components on a full size ATX form-factor motherboard:

![Image of motherboard](https://www.dropbox.com/s/7jc00mllz3vs8ta/Lambda%20School%20Motherboard.jpg?raw=1)
An image of an older motherboard - many of the base components are the same, but the front size bus is missing on modern motherboards because it is now inside of the CPU.

![LGA-1151 socket](https://upload.wikimedia.org/wikipedia/commons/c/c9/Core_i7_bottom.png)
The pins on the bottom of the CPU that connect it with the rest of the system components: clock controls, buses, serial interfaces, interrupts, power

![i7 CPU on motherboard](https://commons.wikimedia.org/wiki/File:Intel_i7_4770_CPU_on_an_ASUS_Gryphon_Z87_uATX_motherboard.jpg)

![Kaby Lake Quad Core](https://en.wikichip.org/w/images/thumb/d/dc/kaby_lake_%28quad_core%29_%28annotated%29.png/800px-kaby_lake_%28quad_core%29_%28annotated%29.png)

![Quad core manual diagram](https://www.dropbox.com/s/3xli0imznavxdnf/Kaby%20Lake%20Core%20design.png?raw=1)

[Amazing explanation of Kaby Lake CPU architecture](https://en.wikichip.org/wiki/intel/microarchitectures/kaby_lake)

# Elements of the CPU

CPU, Clock(s), Program Counter, Instruction Register, Arithmetic Logic Unit, bus(es), RAM, Registers, Operations

- CPU - a general purpose hardware component built with custom hardware to: read and write memory, perform arithmetic

- Clock(s) - Special pieces of electronics hardware that cause a small voltage cycle at an insanely fast speed. Kaby Lake clocks: base, core, ring, IGP, eDRAM, Mem

- Registers - Small memory locations within the CPU used for retrieving instructions, reading and writing memory, and executing commands.

- Instruction Register - A special memory register that decodes, pipelines, and executes the current instruction (which was read from the memory pointed to by the program counter). In our small example the instruction register will handle a single instruction, memory address, or data, but in a modern CPU at least 64 bits are available and the instruction can be combined with data like (MUL register1address register2address).

- Arithmetic Logic Unit - Part of the CPU that handles basic arithmetic and boolean comparisons.

- Operations - Single numeric values that indicate to the CPU the next step or series of steps.

- Cache - Memory located inside of the CPU for low latency and high throughput. RAM located outside of CPU fundamentally must be slower, because it is so far away.

- bus - A set of wires that connects the CPU with other system components such as RAM and peripherals. The CPU has internal buses, and modern systems have different buses for different components: DMA bus, PCI bus, 

- RAM - A grid of bits

Reading:

[Bus](https://en.wikipedia.org/wiki/Bus_(computing))

[RAM](https://en.wikipedia.org/wiki/Random-access_memory)

## Interrupting the CPU

Polling, Interrupts, and DMA

I/O Bus

### APIC
[Advanced Programmable Interrupt Controller](https://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller)
# Assignment:

Using the ASCII table, a stack, a program counter, and a tiny set of instructions: set, copy, and print, write a program that contains an array of instructions, a "CPU" that reads them starting at index 0, and another array containing the ASCII values, print "Hello world" using node.


    #inputfile
    00000001 # initialize
    00000010 # SET register
    00000000 # register #0
    00000100 # SAVE next
    00001000 # 8
    00000010 # SET register
    00000001 # register #1
    00000100 # SAVE next
    00001001 # 9
    00000010 # SET register
    00000010 # register #3
    00000101 # MUL into last
    00000000 # register #0
    00000001 # register #1
    00000010 # SET register
    00000010 # register #3
    00000101 # PRINT_NUMERIC

Extra credit:

The following command line input:

    node microbusarchitecture.js < inputfile

Should produce

    Hello World!

Using the above specified architecture. `console.log('Hello World!')` is not sufficient.


# Links

[Instruction Register](https://en.wikipedia.org/wiki/Instruction_register)

[RAM](https://en.wikipedia.org/wiki/Random-access_memory)

[PCE Express](https://en.wikipedia.org/wiki/PCI_Express)
