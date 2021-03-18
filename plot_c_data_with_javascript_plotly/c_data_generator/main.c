//Convert the generated data into .txt file.
//gcc main.c -o linker -lm
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

int main()
{
    int i;
    int j;
    double r;
    double dr = 0.005;;
    double theta;
    double dtheta = 6*M_PI/200;;
    double theta_min = 0;
    double theta_max = 8*M_PI;
    int num_points = (theta_max - theta_min)/dtheta;

    //-----------------Generate data for x_data_1 and y_data_1---------------------

    double x_data_1[num_points];
    double y_data_1[num_points];

    r = 0.005;
    theta = theta_min;
    for(i = 0; i < num_points; i++)
    {
        x_data_1[i] = r*cos(theta);
        y_data_1[i] = r*sin(theta);
        theta = theta + dtheta;
        r = r + dr;
    }

    char x_data_1_strings[num_points][20];
    char y_data_1_strings[num_points][20];

    sprintf(x_data_1_strings[0], "%lf, ", x_data_1[0]);
    sprintf(y_data_1_strings[0], "%lf, ", y_data_1[0]);

    for(i = 1; i < num_points - 1; i++)
    {
        sprintf(x_data_1_strings[i], "%lf, ", x_data_1[i]);
        sprintf(y_data_1_strings[i], "%lf, ", y_data_1[i]);
    }
    sprintf(x_data_1_strings[i], "%lf", x_data_1[i]);
    sprintf(y_data_1_strings[i], "%lf", y_data_1[i]);

    char x_1_string[num_points  * 20 + 1];
    char y_1_string[num_points  * 20 + 1];

    for(i = 0; i < num_points; i++)
    {
        strcat(x_1_string, x_data_1_strings[i]);
        strcat(y_1_string, y_data_1_strings[i]);
    }

    int data_string_1_size = num_points*20*2 + 100;
    char data_string_1[data_string_1_size];

    strcat(data_string_1, "x_data_1:\n");
    strcat(data_string_1, x_1_string);
    strcat(data_string_1, "\n\n");
    strcat(data_string_1, "y_data_1:\n");
    strcat(data_string_1, y_1_string);
    strcat(data_string_1, "\n\n");

    //-----------------Generate data for x_data_2 and y_data_2---------------------

    double x_data_2[num_points];
    double y_data_2[num_points];

    r = 0.005;
    theta = theta_min;
    for(i = 0; i < num_points; i++)
    {
        x_data_2[i] = -r*cos(theta);
        y_data_2[i] = -r*sin(theta);
        theta = theta + dtheta;
        r = r + dr;
    }

    char x_data_2_strings[num_points][20];
    char y_data_2_strings[num_points][20];

    sprintf(x_data_2_strings[0], "%lf, ", x_data_2[0]);
    sprintf(y_data_2_strings[0], "%lf, ", y_data_2[0]);

    for(i = 1; i < num_points - 1; i++)
    {
        sprintf(x_data_2_strings[i], "%lf, ", x_data_2[i]);
        sprintf(y_data_2_strings[i], "%lf, ", y_data_2[i]);
    }
    sprintf(x_data_2_strings[i], "%lf", x_data_2[i]);
    sprintf(y_data_2_strings[i], "%lf", y_data_2[i]);

    char x_2_string[num_points  * 20 + 1];
    char y_2_string[num_points  * 20 + 1];

    for(i = 0; i < num_points; i++)
    {
        strcat(x_2_string, x_data_2_strings[i]);
        strcat(y_2_string, y_data_2_strings[i]);
    }

    int data_string_2_size = num_points*20*2 + 100;
    char data_string_2[data_string_2_size];

    strcat(data_string_2, "x_data_2:\n");
    strcat(data_string_2, x_2_string);
    strcat(data_string_2, "\n\n");
    strcat(data_string_2, "y_data_2:\n");
    strcat(data_string_2, y_2_string);
    strcat(data_string_2, "\n\n");

    //------------------------output the data strings to a file-----------------------------------

    int data_string_size = data_string_1_size + data_string_2_size + 1;
    char data_string[data_string_size];

    strcat(data_string, data_string_1);
    strcat(data_string, data_string_2);

    printf("%s", data_string);

    FILE * file_pointer;

    file_pointer = fopen("data.txt", "w");

    if(file_pointer == NULL)
    {
        printf("Failed to open the file.\n");
    }
    else
    {
        fputs(data_string, file_pointer);
    }

    return 0;
}

