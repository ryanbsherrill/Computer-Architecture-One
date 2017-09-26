/**

#inputfile

this is 1
7 off 1 on
00000001 # initialize

this is 2
6 off 1 on 1 off
cpu reconfigs
00000010 # SET register

this is 0
8 off
00000000 # register #0

stored perm in register 0
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

Intruction Cycle
instruction is loaded into the register
after the processor fetches it from the
memory location pointed by the program counter

Program Counter
processor register - indicates where a computer
is in its program sequence

incremented after fetching an instruction
holds the memory address of (points to - pointer)
the next instruction that would be executed
usually fetch instructions sequentially from
memory
control transfer instructions change the sequence
by placing a new value in the PC
these include branches, subroutine calls, and returns

Branch
provides that the next instruction is fetched
from somewhere else in memory

Subroutine
not only branches, but saves the preceding contents
of the PC somewhere

Return
retrieves the saved contents of the PC and places
it back in the PC, resuming sequential execution
with the instruction following the subroutine call
*/

// Using the ASCII table
// a stack
// a program counter,
let programCounter = 0;
// use set interval to create an interval
// specify how fast you want
// give it console logs so you can see what's going on
// each time call executeCore

// execute core
const executeCore = () => {
  // read mem
  // read data in file that is pointed to by programCounter
  // MAR is auto

  // copy what is in PC into instructionRegistry
};

//instructionRegistry = IR
let instructionRegister = ["some instructions"];
// when initialized, set all registries

// SET command specify the register for the next command

//counter ticks

// DATA command register is zero

// counter ticks
// reads val

// 4 is save
// when next comes to register won't come in -- will be piped to 
// prepare to store the next

// we are creating assembly language -- human interp of machine language
// analytical engine

// in the initialize step
// have function to zero registers
// register 0
// register 1
// register 2
// register 3

// set of instructions: set, copy, and print

// file system
const fs = require('fs');
// import "stack" data structure
let Stack = require('./stack.js')

// be able to handle pound sign

// STACK

// create stack
const myStack = new Stack();

console.log(00000001.charCodeAt(0))

// execute central loop
// read from mem pointed to by counter
// starts at 0
// reads from file fs
// increments
// mem add register put that data inside a constructor
// inside ex conditional 

