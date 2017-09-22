# Computer Architecture

Welcome to the first class on classical Computer Science! Beginning now, you will be studying the underpinnings of the programming lessons that you have practiced previously.

The first pair of sprints in this coursework are about your computer itself: computer architecture. Generic computers are just a large and careful collection of basic electronics components and wires connecting them. Computer architecture is the specific design of a computer.

Computers have grown radically in transistor density and clock speed, but the overall design of your computer has not changed tremendously since the 8086 in 1976 [1](https://en.wikipedia.org/wiki/X86). Modern computers utilized a fixed component architecture, where separate components can be upgraded, swapped, or redesigned for the next version with minimal impact on other components. It helps to visualize these components on a full size ATX form-factor motherboard:

![Image of motherboard](https://www.dropbox.com/s/7jc00mllz3vs8ta/Lambda%20School%20Motherboard.jpg?raw=1){:width="50%"}

![LGA-1151 socket](https://en.wikichip.org/wiki/File:FCLGA-1151.svg)

![Kaby Lake Quad Core](https://en.wikichip.org/w/images/thumb/d/dc/kaby_lake_%28quad_core%29_%28annotated%29.png/800px-kaby_lake_%28quad_core%29_%28annotated%29.png)

![Quad core manual diagram](https://en.wikichip.org/w/images/thumb/d/dc/kaby_lake_%28quad_core%29_%28annotated%29.png/800px-kaby_lake_%28quad_core%29_%28annotated%29.png)

![i7 CPU on motherboard](https://commons.wikimedia.org/wiki/File:Intel_i7_4770_CPU_on_an_ASUS_Gryphon_Z87_uATX_motherboard.jpg)

![i7 CPU underside](https://upload.wikimedia.org/wikipedia/commons/c/c9/Core_i7_bottom.png)

Full explanation of Kaby Lake cpu design:

[Amazing diagram of Kaby Lake CPU architecture](https://en.wikichip.org/wiki/intel/microarchitectures/kaby_lake)

# Elements of the CPU

CPU, Clock(s), Program Counter, Instruction Register, Arithmetic Logic Unit, bus(es), RAM, Registers, Operations

#### CPU - a general purpose hardware component built with custom hardware to: read and write memory, perform arithmetic

#### Clock(s) - Special pieces of electronics hardware that cause a small voltage cycle at an insanely fast speed. Kaby Lake clocks: base, core, ring, IGP, eDRAM, Mem

#### Registers - Small memory locations within the CPU used for retrieving instructions, reading and writing memory, and executing commands.

#### Instruction Register - A special memory register that decodes, pipelines, and executes the current instruction (which was read from the memory pointed to by the program counter). In our small example the instruction register will handle a single instruction, memory address, or data, but in a modern CPU at least 64 bits are available and the instruction can be combined with data like (MUL register1address register2address).

#### Arithmetic Logic Unit - Part of the CPU that handles basic arithmetic and boolean comparisons.

#### Operations - Single numeric values that indicate to the CPU the next step or series of steps.

#### Cache - Memory located inside of the CPU for low latency and high throughput. RAM located outside of CPU fundamentally must be slower, because it is so far away.

#### bus - A set of wires that connects the CPU with other system components such as RAM and peripherals. The CPU has internal buses, and modern systems have different buses for different components: DMA bus, PCI bus, 

#### RAM - A grid of bits

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

