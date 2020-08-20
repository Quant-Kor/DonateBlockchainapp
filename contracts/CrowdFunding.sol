pragma solidity ^0.5.10;

contract CrowdFunding {
    address public owner;
    address public donater;
    uint public donateamount;
    uint public totalamount;
    uint public startTime;
    uint public deadline;
    uint public goalamount;
    
    modifier meetDeadline() {
        require(now < deadline);
        _;
    }
    
    modifier afterDeadline() {
        require(now > deadline);
        _;
    }
    
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
    mapping(address => uint) public balance;
    
    // struct Funder {
    //     address addr;
    //     uint amount;
    // }
    
    
    
    constructor (uint _fundingday, uint _goalamount) public {
        owner = msg.sender;
        startTime = now;
        deadline = startTime + _fundingday * 3 minutes;
        goalamount = _goalamount;
        totalamount = 0;
    }
    
    
    function CurrentAmount() public view returns (uint){
        return totalamount;
    }
    
    
    function () payable external meetDeadline{
        donater = msg.sender;
        donateamount = msg.value;
        totalamount += msg.value;
        balance[msg.sender] += msg.value;
    }
    
    
    
    function refunds() public afterDeadline {
        require(balance[msg.sender] > 0);
        uint amount = balance[msg.sender];
        
        balance[msg.sender] = 0;
        msg.sender.transfer(amount);
        totalamount -= amount;
    }
    
    function withdraw() public afterDeadline{
        require(goalamount >= totalamount);
        msg.sender.transfer(totalamount);
        totalamount = 0;
    }
    
    // function killcontract() onlyOwner public {
    //     selfdestruct(owner);
    // }
}