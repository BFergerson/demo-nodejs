/*
 * Execute the "Add Breakpoint" command with your cursor on line 16 to set up a non-breaking breakpoint
 * before the execution of that line. This will open the breakpoint configuration inlay. Hit enter to
 * make the breakpoint non-conditional. Hit enter again to make the breakpoint single-use and create
 * the breakpoint.
 *
 * Once the breakpoint is created, the breakpoint status inlay will appear. This inlay will show the
 * current status of the breakpoint and will be marked as "Complete" once the breakpoint is hit. Once
 * the breakpoint is hit, the breakpoint status inlay can be expanded to show a table of the breakpoint
 * hits. Clicking on a breakpoint hit will open the breakpoint hit data in the traditional debugger
 * variables view.
 */
module.exports = function () {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = randomNumber % 2 === 0;
    console.log(`${randomNumber} is ${isEven ? "even" : "odd"}`);
}