import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewUser } from '../models/new_user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Index', 'Email', 'Questions', 'Time'];
  dataSource: MatTableDataSource<NewUser>;
  isLoaded: boolean = false;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this.getAllUsers();
    this.isLoaded = false;
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }
}
